import { Reporte } from "../../domain/interfaces/Reporte";
import { ReporteRepository } from "../../domain/repositories/ReporteRepository";

export class ReporteService {
  constructor(private reporteRepository: ReporteRepository) {}

  // Servicios con Callbacks
  crearReporteCallback(
    datosReporte: Omit<Reporte, "id">,
    callback: (error: Error | null, reporte?: Reporte) => void
  ): void {
    this.reporteRepository.createCallback(datosReporte, callback);
  }

  obtenerReportePorIdCallback(
    id: number,
    callback: (error: Error | null, reporte?: Reporte) => void
  ): void {
    this.reporteRepository.findByIdCallback(id, callback);
  }

  obtenerTodosLosReportesCallback(
    callback: (error: Error | null, reportes?: Reporte[]) => void
  ): void {
    this.reporteRepository.findAllCallback(callback);
  }

  actualizarReporteCallback(
    id: number,
    datosActualizacion: Partial<Reporte>,
    callback: (error: Error | null, reporte?: Reporte) => void
  ): void {
    this.reporteRepository.updateCallback(id, datosActualizacion, callback);
  }

  eliminarReporteCallback(
    id: number,
    callback: (error: Error | null, eliminado?: boolean) => void
  ): void {
    this.reporteRepository.deleteCallback(id, callback);
  }

  obtenerReportesPorTipoCallback(
    tipo: string,
    callback: (error: Error | null, reportes?: Reporte[]) => void
  ): void {
    this.reporteRepository.findByTipoCallback(tipo, callback);
  }

  obtenerReportesPorFechaCallback(
    fecha: string,
    callback: (error: Error | null, reportes?: Reporte[]) => void
  ): void {
    this.reporteRepository.findByFechaCallback(fecha, callback);
  }

  // Servicios con Promesas
  async crearReporte(datosReporte: Omit<Reporte, "id">): Promise<Reporte> {
    return new Promise((resolve, reject) => {
      this.crearReporteCallback(
        datosReporte,
        (error: Error | null, reporte?: Reporte) => {
          if (error) reject(error);
          else resolve(reporte!);
        }
      );
    });
  }

  async obtenerReportePorId(id: number): Promise<Reporte | null> {
    return new Promise((resolve, reject) => {
      this.obtenerReportePorIdCallback(
        id,
        (error: Error | null, reporte?: Reporte) => {
          if (error) reject(error);
          else resolve(reporte || null);
        }
      );
    });
  }

  async obtenerTodosLosReportes(): Promise<Reporte[]> {
    return new Promise((resolve, reject) => {
      this.obtenerTodosLosReportesCallback(
        (error: Error | null, reportes?: Reporte[]) => {
          if (error) reject(error);
          else resolve(reportes || []);
        }
      );
    });
  }

  async actualizarReporte(
    id: number,
    datosActualizacion: Partial<Reporte>
  ): Promise<Reporte> {
    return new Promise((resolve, reject) => {
      this.actualizarReporteCallback(
        id,
        datosActualizacion,
        (error: Error | null, reporte?: Reporte) => {
          if (error) reject(error);
          else resolve(reporte!);
        }
      );
    });
  }

  async eliminarReporte(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.eliminarReporteCallback(
        id,
        (error: Error | null, eliminado?: boolean) => {
          if (error) reject(error);
          else resolve(eliminado || false);
        }
      );
    });
  }

  async obtenerReportesPorTipo(tipo: string): Promise<Reporte[]> {
    return new Promise((resolve, reject) => {
      this.obtenerReportesPorTipoCallback(
        tipo,
        (error: Error | null, reportes?: Reporte[]) => {
          if (error) reject(error);
          else resolve(reportes || []);
        }
      );
    });
  }

  async obtenerReportesPorFecha(fecha: string): Promise<Reporte[]> {
    return new Promise((resolve, reject) => {
      this.obtenerReportesPorFechaCallback(
        fecha,
        (error: Error | null, reportes?: Reporte[]) => {
          if (error) reject(error);
          else resolve(reportes || []);
        }
      );
    });
  }

  // Métodos específicos del dominio
  async generarReporteVentas(
    fechaInicio: string,
    fechaFin: string,
    administradorId: number
  ): Promise<Reporte> {
    const reporteData = {
      administrador_id: administradorId,
      titulo: `Reporte de Ventas - ${fechaInicio} a ${fechaFin}`,
      descripcion: `Reporte de ventas del período ${fechaInicio} al ${fechaFin}`,
      fecha_generacion: new Date().toISOString(),
    };

    return this.crearReporte(reporteData);
  }

  async generarReporteReservas(
    fechaInicio: string,
    fechaFin: string,
    administradorId: number
  ): Promise<Reporte> {
    const reporteData = {
      administrador_id: administradorId,
      titulo: `Reporte de Reservas - ${fechaInicio} a ${fechaFin}`,
      descripcion: `Reporte de reservas del período ${fechaInicio} al ${fechaFin}`,
      fecha_generacion: new Date().toISOString(),
    };

    return this.crearReporte(reporteData);
  }
}
