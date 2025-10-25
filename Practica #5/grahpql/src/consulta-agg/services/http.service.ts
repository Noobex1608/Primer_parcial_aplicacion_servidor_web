import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { ServicioWithLocal } from '../entities/servicio-with-local.entity';
import { EventoWithLocals } from '../entities/evento-with-local.entity';
import { ResumenCiudad } from '../entities/resumen-ciudad.entity';

@Injectable()
export class HttpService {
  private readonly logger = new Logger(HttpService.name);
  // Por defecto la API REST usa un prefijo global '/api/v1'
  private readonly base = process.env.REST_BASE_URL || 'http://localhost:3000/api/v1';

  async getServicios(): Promise<any[]> {
    const res = await axios.get(`${this.base}/servicios`);
    return Array.isArray(res.data) ? res.data : [];
  }

  async getLocales(): Promise<any[]> {
    const res = await axios.get(`${this.base}/locales`);
    return Array.isArray(res.data) ? res.data : [];
  }

  async getEventos(): Promise<any[]> {
    const res = await axios.get(`${this.base}/eventos`);
    return Array.isArray(res.data) ? res.data : [];
  }

  async getClientes(): Promise<any[]> {
    const res = await axios.get(`${this.base}/clientes`);
    return Array.isArray(res.data) ? res.data : [];
  }

  async getTopServiciosConLocales(limit = 5): Promise<ServicioWithLocal[]> {
    const servicios = await this.getServicios();
    const locales = await this.getLocales();

    const top = servicios
      .sort((a: any, b: any) => Number(b.precio) - Number(a.precio))
      .slice(0, limit)
      .map((s: any) => ({
        id: s.id,
        nombre: s.nombre,
        precio: Number(s.precio),
        tipo: s.tipo,
        locales: locales.map((l: any) => ({ id: l.id, nombre: l.nombre, ciudad: l.ciudad })),
      } as ServicioWithLocal));

    return top;
  }

  async getEventosPorCiudad(ciudad: string): Promise<EventoWithLocals[]> {
    const eventos = await this.getEventos();
    const locales = await this.getLocales();

    const eventosFiltrados = eventos
      .filter((e: any) => {
        if (!ciudad) return true;
        if (e.ubicacion && typeof e.ubicacion === 'string') {
          return e.ubicacion.toLowerCase().includes(ciudad.toLowerCase());
        }
        return false;
      })
      .map((e: any) => ({
        id: e.id,
        nombre: e.nombre,
        tipo: e.tipo,
        fecha_inicio: e.fecha_inicio,
        fecha_fin: e.fecha_fin,
        locales: locales
          .filter((l: any) => l.ciudad && e.ubicacion && l.ciudad.toLowerCase() === ciudad.toLowerCase())
          .map((l: any) => ({ id: l.id, nombre: l.nombre, ciudad: l.ciudad })),
      } as EventoWithLocals));

    return eventosFiltrados;
  }

  async getResumenPorCiudad(): Promise<ResumenCiudad[]> {
    const servicios = await this.getServicios();
    const locales = await this.getLocales();

    const map: Record<string, { totalLocales: number; totalServicios: number }> = {};
    locales.forEach((l: any) => {
      const ciudad = l.ciudad || 'Sin ciudad';
      if (!map[ciudad]) map[ciudad] = { totalLocales: 0, totalServicios: 0 };
      map[ciudad].totalLocales += 1;
    });

    const ciudades = Object.keys(map);
    servicios.forEach((s: any, idx: number) => {
      if (ciudades.length === 0) return;
      const ciudad = ciudades[idx % ciudades.length];
      map[ciudad].totalServicios += 1;
    });

    return Object.entries(map).map(([ciudad, vals]) => ({ ciudad, totalLocales: vals.totalLocales, totalServicios: vals.totalServicios } as ResumenCiudad));
  }
}
