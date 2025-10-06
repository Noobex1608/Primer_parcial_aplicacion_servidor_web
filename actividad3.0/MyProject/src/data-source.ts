import "reflect-metadata"
import { DataSource } from "typeorm"
import { Usuario } from "./entity/usuario"
import { Cliente } from "./entity/cliente"
import { Administrador } from "./entity/administrador"
import { Blog } from "./entity/blog"
import { Estado } from "./entity/Estado"
import { Evento } from "./entity/eventos"
import { Factura, DetalleFactura } from "./entity/factura"
import { Local, Mesa } from "./entity/Local"
import { Notificacion } from "./entity/notificacion"
import { Pago, MetodoPago } from "./entity/pago"
import { Reporte } from "./entity/reporte"
import { Reserva, ReservaMesaAsignacion, ReservaServicio } from "./entity/reserva"
import { Servicio } from "./entity/Servicio"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [
        Usuario,
        Cliente,
        Administrador,
        Blog,
        Estado,
        Evento,
        Factura,
        DetalleFactura,
        Local,
        Mesa,
        Notificacion,
        Pago,
        MetodoPago,
        Reporte,
        Reserva,
        ReservaMesaAsignacion,
        ReservaServicio,
        Servicio
    ],
    migrations: [],
    subscribers: [],
})
