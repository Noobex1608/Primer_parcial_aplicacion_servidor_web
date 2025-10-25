import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { ClienteConReservas } from '../entities/cliente-con-reservas.entity';
import { EventoFiltrado } from '../entities/evento-filtrado.entity';
import { ServicioPaginado } from '../entities/servicio-paginado.entity';
import { BuscarClienteInput } from '../dto/buscar-cliente.input';
import { BuscarEventoInput } from '../dto/buscar-evento.input';
import { PaginacionInput } from '../dto/paginacion.input';

@Injectable()
export class HttpFiltroService {
  private readonly logger = new Logger(HttpFiltroService.name);
  private readonly base = process.env.REST_BASE_URL || 'http://localhost:3000/api/v1';

  async getClientes(): Promise<any[]> {
    try {
      const res = await axios.get(`${this.base}/clientes`);
      return Array.isArray(res.data) ? res.data : [];
    } catch (error) {
      this.logger.error('Error fetching clientes', error);
      return [];
    }
  }

  async getReservas(): Promise<any[]> {
    try {
      const res = await axios.get(`${this.base}/reservas`);
      return Array.isArray(res.data) ? res.data : [];
    } catch (error) {
      this.logger.error('Error fetching reservas', error);
      return [];
    }
  }

  async getEventos(): Promise<any[]> {
    try {
      const res = await axios.get(`${this.base}/eventos`);
      return Array.isArray(res.data) ? res.data : [];
    } catch (error) {
      this.logger.error('Error fetching eventos', error);
      return [];
    }
  }

  async getLocales(): Promise<any[]> {
    try {
      const res = await axios.get(`${this.base}/locales`);
      return Array.isArray(res.data) ? res.data : [];
    } catch (error) {
      this.logger.error('Error fetching locales', error);
      return [];
    }
  }

  async getServicios(): Promise<any[]> {
    try {
      const res = await axios.get(`${this.base}/servicios`);
      return Array.isArray(res.data) ? res.data : [];
    } catch (error) {
      this.logger.error('Error fetching servicios', error);
      return [];
    }
  }

  /**
   * Query 1: Buscar clientes por múltiples criterios con sus últimas reservas
   * Filtros: nombre, email, ordenamiento, límite de reservas
   */
  async buscarClientesConReservas(filtro: BuscarClienteInput): Promise<ClienteConReservas[]> {
    let clientes = await this.getClientes();
    const reservas = await this.getReservas();

    this.logger.log(`Total clientes obtenidos: ${clientes.length}`);
    this.logger.log(`Total reservas obtenidas: ${reservas.length}`);

    // Si no hay clientes, retornar array vacío
    if (clientes.length === 0) {
      this.logger.warn('No se encontraron clientes en el sistema');
      return [];
    }

    // Aplicar filtros de búsqueda
    if (filtro.nombre) {
      const nombreLower = filtro.nombre.toLowerCase();
      clientes = clientes.filter((c: any) => 
        c.nombre && c.nombre.toLowerCase().includes(nombreLower)
      );
      this.logger.log(`Clientes después de filtrar por nombre: ${clientes.length}`);
    }

    if (filtro.email) {
      const emailLower = filtro.email.toLowerCase();
      clientes = clientes.filter((c: any) => 
        c.email && c.email.toLowerCase().includes(emailLower)
      );
      this.logger.log(`Clientes después de filtrar por email: ${clientes.length}`);
    }

    if (filtro.telefono) {
      clientes = clientes.filter((c: any) => 
        c.telefono && c.telefono.includes(filtro.telefono)
      );
      this.logger.log(`Clientes después de filtrar por teléfono: ${clientes.length}`);
    }

    // Mapear clientes con sus reservas
    const clientesConReservas = clientes.map((cliente: any) => {
      // Intentar múltiples formas de encontrar reservas del cliente
      let reservasCliente = reservas.filter((r: any) => 
        r.clienteId === cliente.id || 
        r.cliente_id === cliente.id ||
        r.idCliente === cliente.id
      );

      // Si no hay reservas, aún así mostrar el cliente
      this.logger.debug(`Cliente ${cliente.id} (${cliente.nombre}) tiene ${reservasCliente.length} reservas`);

      // Ordenar reservas por fecha
      reservasCliente.sort((a: any, b: any) => {
        const dateA = new Date(a.fecha || a.createdAt || a.fecha_reserva || 0).getTime();
        const dateB = new Date(b.fecha || b.createdAt || b.fecha_reserva || 0).getTime();
        return filtro.ordenarReservasPor === 'ASC' ? dateA - dateB : dateB - dateA;
      });

      // Limitar cantidad de reservas
      const limiteReservas = filtro.limiteReservas || 5;
      reservasCliente = reservasCliente.slice(0, limiteReservas);

      // Contar todas las reservas del cliente (antes de limitar)
      const totalReservasCliente = reservas.filter((r: any) => 
        r.clienteId === cliente.id || 
        r.cliente_id === cliente.id ||
        r.idCliente === cliente.id
      ).length;

      return {
        id: cliente.id,
        nombre: cliente.nombre || 'Sin nombre',
        email: cliente.email || 'Sin email',
        telefono: cliente.telefono || cliente.phone || 'Sin teléfono',
        totalReservas: totalReservasCliente,
        reservas: reservasCliente.map((r: any) => ({
          id: r.id,
          fecha: r.fecha || r.createdAt || r.fecha_reserva || new Date().toISOString(),
          estado: r.estado || r.status || 'Pendiente',
          monto: Number(r.monto || r.total || r.precio || 0),
          localId: r.localId || r.local_id || r.idLocal || null,
        })),
      };
    });

    // Aplicar ordenamiento a clientes
    if (filtro.ordenarPor) {
      clientesConReservas.sort((a, b) => {
        if (filtro.ordenarPor === 'nombre') {
          return filtro.ordenamiento === 'ASC' 
            ? a.nombre.localeCompare(b.nombre)
            : b.nombre.localeCompare(a.nombre);
        } else if (filtro.ordenarPor === 'totalReservas') {
          return filtro.ordenamiento === 'ASC'
            ? a.totalReservas - b.totalReservas
            : b.totalReservas - a.totalReservas;
        }
        return 0;
      });
    }

    this.logger.log(`Retornando ${clientesConReservas.length} clientes con reservas`);
    return clientesConReservas;
  }

  /**
   * Query 2: Buscar eventos con filtros complejos (fecha, ubicación, tipo)
   * Incluye información de locales cercanos
   */
  async buscarEventosFiltrados(filtro: BuscarEventoInput): Promise<EventoFiltrado[]> {
    let eventos = await this.getEventos();
    const locales = await this.getLocales();

    // Filtro por tipo
    if (filtro.tipo) {
      const tipoLower = filtro.tipo.toLowerCase();
      eventos = eventos.filter((e: any) => 
        e.tipo && e.tipo.toLowerCase().includes(tipoLower)
      );
    }

    // Filtro por ubicación
    if (filtro.ubicacion) {
      const ubicacionLower = filtro.ubicacion.toLowerCase();
      eventos = eventos.filter((e: any) => 
        e.ubicacion && e.ubicacion.toLowerCase().includes(ubicacionLower)
      );
    }

    // Filtro por rango de fechas
    if (filtro.fechaDesde) {
      const fechaDesde = new Date(filtro.fechaDesde);
      eventos = eventos.filter((e: any) => {
        if (!e.fecha_inicio) return false;
        return new Date(e.fecha_inicio) >= fechaDesde;
      });
    }

    if (filtro.fechaHasta) {
      const fechaHasta = new Date(filtro.fechaHasta);
      eventos = eventos.filter((e: any) => {
        if (!e.fecha_inicio) return false;
        return new Date(e.fecha_inicio) <= fechaHasta;
      });
    }

    // Filtro por duración mínima (en días)
    if (filtro.duracionMinimaDias !== undefined && filtro.duracionMinimaDias !== null) {
      const duracionMinima = filtro.duracionMinimaDias;
      eventos = eventos.filter((e: any) => {
        if (!e.fecha_inicio || !e.fecha_fin) return false;
        const inicio = new Date(e.fecha_inicio);
        const fin = new Date(e.fecha_fin);
        const duracion = Math.ceil((fin.getTime() - inicio.getTime()) / (1000 * 60 * 60 * 24));
        return duracion >= duracionMinima;
      });
    }

    // Mapear eventos con locales cercanos
    const eventosFiltrados = eventos.map((evento: any) => {
      const localesCercanos = locales
        .filter((local: any) => {
          if (!evento.ubicacion || !local.ciudad) return false;
          return local.ciudad.toLowerCase().includes(evento.ubicacion.toLowerCase()) ||
                 evento.ubicacion.toLowerCase().includes(local.ciudad.toLowerCase());
        })
        .map((local: any) => ({
          id: local.id,
          nombre: local.nombre,
          ciudad: local.ciudad,
          direccion: local.direccion || 'Sin dirección',
        }));

      // Calcular duración
      let duracionDias = 0;
      if (evento.fecha_inicio && evento.fecha_fin) {
        const inicio = new Date(evento.fecha_inicio);
        const fin = new Date(evento.fecha_fin);
        duracionDias = Math.ceil((fin.getTime() - inicio.getTime()) / (1000 * 60 * 60 * 24));
      }

      return {
        id: evento.id,
        nombre: evento.nombre,
        tipo: evento.tipo,
        ubicacion: evento.ubicacion || 'Sin ubicación',
        fecha_inicio: evento.fecha_inicio,
        fecha_fin: evento.fecha_fin,
        duracionDias,
        cantidadLocalesCercanos: localesCercanos.length,
        localesCercanos,
      };
    });

    // Aplicar ordenamiento
    if (filtro.ordenarPor) {
      eventosFiltrados.sort((a, b) => {
        if (filtro.ordenarPor === 'fecha') {
          const dateA = new Date(a.fecha_inicio || 0).getTime();
          const dateB = new Date(b.fecha_inicio || 0).getTime();
          return filtro.ordenamiento === 'ASC' ? dateA - dateB : dateB - dateA;
        } else if (filtro.ordenarPor === 'duracion') {
          return filtro.ordenamiento === 'ASC'
            ? a.duracionDias - b.duracionDias
            : b.duracionDias - a.duracionDias;
        } else if (filtro.ordenarPor === 'nombre') {
          return filtro.ordenamiento === 'ASC'
            ? a.nombre.localeCompare(b.nombre)
            : b.nombre.localeCompare(a.nombre);
        }
        return 0;
      });
    }

    return eventosFiltrados;
  }

  /**
   * Query 3: Buscar servicios con paginación, ordenamiento y filtros
   * Incluye metadata de paginación
   */
  async buscarServiciosPaginados(paginacion: PaginacionInput): Promise<ServicioPaginado> {
    let servicios = await this.getServicios();

    // Aplicar filtros
    if (paginacion.buscarTexto) {
      const textoLower = paginacion.buscarTexto.toLowerCase();
      servicios = servicios.filter((s: any) => 
        (s.nombre && s.nombre.toLowerCase().includes(textoLower)) ||
        (s.tipo && s.tipo.toLowerCase().includes(textoLower))
      );
    }

    if (paginacion.tipo) {
      const tipoLower = paginacion.tipo.toLowerCase();
      servicios = servicios.filter((s: any) => 
        s.tipo && s.tipo.toLowerCase().includes(tipoLower)
      );
    }

    if (paginacion.precioMin !== undefined && paginacion.precioMin !== null) {
      const precioMinimo = paginacion.precioMin;
      servicios = servicios.filter((s: any) => Number(s.precio || 0) >= precioMinimo);
    }

    if (paginacion.precioMax !== undefined && paginacion.precioMax !== null) {
      const precioMaximo = paginacion.precioMax;
      servicios = servicios.filter((s: any) => Number(s.precio || 0) <= precioMaximo);
    }

    // Calcular totales antes de paginar
    const totalItems = servicios.length;

    // Aplicar ordenamiento
    if (paginacion.ordenarPor) {
      servicios.sort((a: any, b: any) => {
        if (paginacion.ordenarPor === 'precio') {
          const precioA = Number(a.precio || 0);
          const precioB = Number(b.precio || 0);
          return paginacion.ordenamiento === 'ASC' ? precioA - precioB : precioB - precioA;
        } else if (paginacion.ordenarPor === 'nombre') {
          return paginacion.ordenamiento === 'ASC'
            ? a.nombre.localeCompare(b.nombre)
            : b.nombre.localeCompare(a.nombre);
        }
        return 0;
      });
    }

    // Aplicar paginación
    const pagina = paginacion.pagina || 1;
    const limite = paginacion.limite || 10;
    const inicio = (pagina - 1) * limite;
    const serviciosPaginados = servicios.slice(inicio, inicio + limite);

    // Calcular metadata de paginación
    const totalPaginas = Math.ceil(totalItems / limite);

    return {
      items: serviciosPaginados.map((s: any) => ({
        id: s.id,
        nombre: s.nombre,
        tipo: s.tipo,
        precio: Number(s.precio || 0),
        descripcion: s.descripcion || 'Sin descripción',
      })),
      metadata: {
        totalItems,
        totalPaginas,
        paginaActual: pagina,
        itemsPorPagina: limite,
        tienePaginaAnterior: pagina > 1,
        tienePaginaSiguiente: pagina < totalPaginas,
      },
    };
  }
}
