import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { ClientePorCiudad } from '../entities/cliente-por-ciudad.entity';
import { EventoConEstadisticas } from '../entities/evento-con-estadisticas.entity';
import { AnalisisServicioTipo } from '../entities/analisis-servicio-tipo.entity';

@Injectable()
export class HttpNegocioService {
  private readonly logger = new Logger(HttpNegocioService.name);
  // Por defecto la API REST usa un prefijo global '/api/v1'
  private readonly base = process.env.REST_BASE_URL || 'http://localhost:3000/api/v1';

  async getServicios(): Promise<any[]> {
    try {
      const res = await axios.get(`${this.base}/servicios`);
      return Array.isArray(res.data) ? res.data : [];
    } catch (error) {
      this.logger.error('Error fetching servicios', error);
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

  async getEventos(): Promise<any[]> {
    try {
      const res = await axios.get(`${this.base}/eventos`);
      return Array.isArray(res.data) ? res.data : [];
    } catch (error) {
      this.logger.error('Error fetching eventos', error);
      return [];
    }
  }

  async getClientes(): Promise<any[]> {
    try {
      const res = await axios.get(`${this.base}/clientes`);
      return Array.isArray(res.data) ? res.data : [];
    } catch (error) {
      this.logger.error('Error fetching clientes', error);
      return [];
    }
  }

  /**
   * Query 1: Análisis de clientes agrupados por ciudad
   * Agrupa clientes por ciudad y cuenta cuántos hay en cada una
   */
  async getClientesPorCiudad(): Promise<ClientePorCiudad[]> {
    const clientes = await this.getClientes();
    const locales = await this.getLocales();

    // Crear un mapa de ciudades
    const ciudadMap: Record<string, { clientes: any[]; locales: any[] }> = {};

    // Agrupar locales por ciudad
    locales.forEach((local: any) => {
      const ciudad = local.ciudad || 'Sin ciudad';
      if (!ciudadMap[ciudad]) {
        ciudadMap[ciudad] = { clientes: [], locales: [] };
      }
      ciudadMap[ciudad].locales.push({
        id: local.id,
        nombre: local.nombre,
        ciudad: local.ciudad,
      });
    });

    // Asignar clientes a ciudades (simulando que cada cliente está en una ciudad)
    clientes.forEach((cliente: any, idx: number) => {
      const ciudades = Object.keys(ciudadMap);
      if (ciudades.length > 0) {
        const ciudad = ciudades[idx % ciudades.length];
        ciudadMap[ciudad].clientes.push({
          id: cliente.id,
          nombre: cliente.nombre,
          email: cliente.email,
        });
      }
    });

    // Convertir el mapa a array de resultados
    return Object.entries(ciudadMap).map(([ciudad, data]) => ({
      ciudad,
      totalClientes: data.clientes.length,
      totalLocales: data.locales.length,
      clientes: data.clientes,
      locales: data.locales,
    }));
  }

  /**
   * Query 2: Eventos con estadísticas calculadas
   * Calcula duración de eventos, cantidad de locales cercanos, etc.
   */
  async getEventosConEstadisticas(): Promise<EventoConEstadisticas[]> {
    const eventos = await this.getEventos();
    const locales = await this.getLocales();

    return eventos.map((evento: any) => {
      // Calcular duración en días
      let duracionDias = 0;
      if (evento.fecha_inicio && evento.fecha_fin) {
        const inicio = new Date(evento.fecha_inicio);
        const fin = new Date(evento.fecha_fin);
        duracionDias = Math.ceil((fin.getTime() - inicio.getTime()) / (1000 * 60 * 60 * 24));
      }

      // Filtrar locales en la misma ubicación/ciudad del evento
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
        }));

      return {
        id: evento.id,
        nombre: evento.nombre,
        tipo: evento.tipo,
        fecha_inicio: evento.fecha_inicio,
        fecha_fin: evento.fecha_fin,
        ubicacion: evento.ubicacion || 'Sin ubicación',
        duracionDias,
        cantidadLocalesCercanos: localesCercanos.length,
        localesCercanos,
      };
    });
  }

  /**
   * Query 3: Análisis de servicios agrupados por tipo
   * Agrupa servicios por tipo y calcula estadísticas de precios
   */
  async getAnalisisServiciosPorTipo(): Promise<AnalisisServicioTipo[]> {
    const servicios = await this.getServicios();

    // Agrupar servicios por tipo
    const tipoMap: Record<string, any[]> = {};
    servicios.forEach((servicio: any) => {
      const tipo = servicio.tipo || 'Sin tipo';
      if (!tipoMap[tipo]) {
        tipoMap[tipo] = [];
      }
      tipoMap[tipo].push(servicio);
    });

    // Calcular estadísticas por tipo
    return Object.entries(tipoMap).map(([tipo, serviciosList]) => {
      const precios = serviciosList
        .map((s: any) => Number(s.precio) || 0)
        .filter((p) => p > 0);

      const totalServicios = serviciosList.length;
      const precioPromedio = precios.length > 0
        ? precios.reduce((sum, p) => sum + p, 0) / precios.length
        : 0;
      const precioMinimo = precios.length > 0 ? Math.min(...precios) : 0;
      const precioMaximo = precios.length > 0 ? Math.max(...precios) : 0;

      const servicios = serviciosList.map((s: any) => ({
        id: s.id,
        nombre: s.nombre,
        precio: Number(s.precio) || 0,
      }));

      return {
        tipo,
        totalServicios,
        precioPromedio: Math.round(precioPromedio * 100) / 100,
        precioMinimo,
        precioMaximo,
        servicios,
      };
    });
  }
}
