# 🎯 Sistema de Gestión de Eventos - API REST

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  Sistema completo de gestión de eventos desarrollado con NestJS, TypeScript y SQLite
</p>

## 👥 Integrantes del Proyecto

| Nombre | Responsabilidad | Carpeta |
|--------|----------------|---------|
| **Steven Magallanes** | Carpeta Maestra | `/src/maestras/` |
| **Joao Moreira** | Carpeta Negocio | `/src/negocio/` |
| **Carlos Valencia** | Carpeta Transaccional | `/src/transaccional/` |

## 📋 Descripción del Proyecto

Sistema integral para la gestión de eventos que incluye administración de clientes, locales, servicios, reservas, facturación y reportes. El proyecto está estructurado en tres módulos principales:

- **🗃️ Módulo Maestras**: Gestión de datos maestros (Estados y Tipos)
- **🏢 Módulo Negocio**: Entidades principales del negocio (Clientes, Eventos, Locales, Servicios, Usuarios)
- **💼 Módulo Transaccional**: Operaciones transaccionales (Blogs, Reservas, Facturas, Pagos, Notificaciones, Reportes)

### Características Principales

- ✅ API REST completa con operaciones CRUD
- ✅ Base de datos SQLite con TypeORM
- ✅ Validación de datos con class-validator
- ✅ Documentación automática con Swagger
- ✅ Arquitectura modular y escalable
- ✅ Datos de prueba incluidos (seed)

## 🚀 Instrucciones de Instalación y Ejecución

### Prerequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd practica4

# Instalar dependencias
npm install
```

### Ejecución

```bash
# Modo desarrollo (con watch mode)
npm run start:dev

# Modo producción
npm run start:prod

# Ejecutar seed de datos de prueba
npx ts-node src/seed.ts
```

La aplicación estará disponible en: `http://localhost:3001`

## 📊 Documentación de Entidades Implementadas

### 🗃️ Módulo Maestras

#### Estado
```typescript
{
  id: number;
  nombre: string;        // Nombre del estado
  descripcion: string;   // Descripción del estado
  codigo: string;        // Código único del estado
  fechaCreacion: Date;   // Fecha de creación
  activo: boolean;       // Estado activo/inactivo
}
```

#### Tipo
```typescript
{
  id: number;
  nombre: string;        // Nombre del tipo
  descripcion: string;   // Descripción del tipo
  codigo: string;        // Código único del tipo
  categoria: string;     // Categoría del tipo
  fechaCreacion: Date;   // Fecha de creación
  activo: boolean;       // Estado activo/inactivo
}
```

### 🏢 Módulo Negocio

#### Cliente
```typescript
{
  id: number;
  nombre_completo: string;  // Nombre completo del cliente
  direccion: string;        // Dirección del cliente
  telefono: string;         // Teléfono de contacto
  email: string;            // Email único del cliente
  activo: boolean;          // Estado activo/inactivo
  creado_en: Date;         // Fecha de creación
  actualizado_en: Date;    // Fecha de última actualización
}
```

#### Usuario
```typescript
{
  id: number;
  nombre: string;          // Nombre del usuario
  email: string;           // Email único del usuario
  contraseña: string;      // Contraseña encriptada
  rol: string;             // Rol del usuario (admin, usuario)
  telefono: string;        // Teléfono de contacto
  activo: boolean;         // Estado activo/inactivo
  creado_en: Date;        // Fecha de creación
  actualizado_en: Date;   // Fecha de última actualización
}
```

#### Local
```typescript
{
  id: number;
  nombre: string;          // Nombre del local
  direccion: string;       // Dirección del local
  ciudad: string;          // Ciudad del local
  telefono: string;        // Teléfono del local
  capacidad: number;       // Capacidad máxima del local
  activo: boolean;         // Estado activo/inactivo
  horario: string;         // Horario de atención
  creado_en: Date;        // Fecha de creación
  actualizado_en: Date;   // Fecha de última actualización
}
```

#### Servicio
```typescript
{
  id: number;
  nombre: string;          // Nombre del servicio
  descripcion: string;     // Descripción del servicio
  precio: number;          // Precio del servicio
  tipo: string;            // Tipo de servicio
  disponible: boolean;     // Disponibilidad del servicio
  duracion_minutos: number; // Duración en minutos
  creado_en: Date;        // Fecha de creación
  actualizado_en: Date;   // Fecha de última actualización
}
```

#### Evento
```typescript
{
  id: number;
  nombre: string;          // Nombre del evento
  tipo: string;            // Tipo de evento
  fecha_inicio: Date;      // Fecha y hora de inicio
  fecha_fin: Date;         // Fecha y hora de fin
  descripcion: string;     // Descripción del evento
  capacidad_maxima: number; // Capacidad máxima
  ubicacion: string;       // Ubicación del evento
  creado_en: Date;        // Fecha de creación
  actualizado_en: Date;   // Fecha de última actualización
}
```

### 💼 Módulo Transaccional

#### Blog
```typescript
{
  id: number;
  administrador_id: number; // ID del administrador autor
  titulo: string;           // Título del blog
  contenido: string;        // Contenido del blog
  etiquetas: string;        // Etiquetas separadas por comas
  publicado_en: string;     // Fecha de publicación
  actualizado_en: string;   // Fecha de actualización
}
```

#### Reserva
```typescript
{
  id: number;
  cliente_id: number;       // ID del cliente
  evento_id: number;        // ID del evento
  numero_personas: number;  // Número de personas
  estado_id: number;        // ID del estado
  fecha_reserva: string;    // Fecha de la reserva
  creado_en: string;       // Fecha de creación
  actualizado_en: string;  // Fecha de actualización
}
```

#### Factura
```typescript
{
  id: number;
  reserva_id: number;      // ID de la reserva
  fecha_emision: string;   // Fecha de emisión
  estado_id: number;       // ID del estado
  creado_en: string;      // Fecha de creación
  actualizado_en: string; // Fecha de actualización
}
```

#### Pago
```typescript
{
  id: number;
  factura_id: number;      // ID de la factura
  monto: number;           // Monto del pago
  metodo_pago: string;     // Método de pago
  estado_id: number;       // ID del estado
  fecha_pago: string;      // Fecha del pago
  creado_en: string;      // Fecha de creación
}
```

#### Notificacion
```typescript
{
  id: number;
  usuario_id: number;      // ID del usuario
  titulo: string;          // Título de la notificación
  contenido: string;       // Contenido de la notificación
  tipo: string;            // Tipo de notificación
  enviado_en: string;     // Fecha de envío
}
```

#### Reporte
```typescript
{
  id: number;
  administrador_id: number; // ID del administrador
  titulo: string;           // Título del reporte
  descripcion: string;      // Descripción del reporte
  datos: string;            // Datos en formato JSON
  generado_en: string;     // Fecha de generación
}
```

## 🔌 Ejemplos de Uso de la API

### Base URL
```
http://localhost:3001
```

### 🗃️ Endpoints del Módulo Maestras

#### Estados
```bash
# Obtener todos los estados
GET /estados

# Obtener un estado por ID
GET /estados/1

# Crear un nuevo estado
POST /estados
Content-Type: application/json
{
  "nombre": "Activo",
  "descripcion": "Estado activo del sistema",
  "codigo": "ACT",
  "activo": true
}

# Actualizar un estado
PATCH /estados/1
Content-Type: application/json
{
  "descripcion": "Estado activo actualizado"
}

# Eliminar un estado
DELETE /estados/1
```

#### Tipos
```bash
# Obtener todos los tipos
GET /tipos

# Crear un nuevo tipo
POST /tipos
Content-Type: application/json
{
  "nombre": "Conferencia",
  "descripcion": "Eventos corporativos",
  "codigo": "CONF",
  "categoria": "Evento",
  "activo": true
}
```

### 🏢 Endpoints del Módulo Negocio

#### Clientes
```bash
# Obtener todos los clientes
GET /clientes

# Crear un nuevo cliente
POST /clientes
Content-Type: application/json
{
  "nombre_completo": "Juan Pérez",
  "email": "juan@example.com",
  "telefono": "555-1234",
  "direccion": "Calle Principal 123",
  "activo": true
}

# Actualizar un cliente
PATCH /clientes/1
Content-Type: application/json
{
  "telefono": "555-5678"
}
```

#### Usuarios
```bash
# Obtener todos los usuarios
GET /usuarios

# Crear un nuevo usuario
POST /usuarios
Content-Type: application/json
{
  "nombre": "Admin Usuario",
  "email": "admin@example.com",
  "contraseña": "password123",
  "rol": "admin",
  "telefono": "555-0000",
  "activo": true
}
```

#### Locales
```bash
# Obtener todos los locales
GET /locales

# Crear un nuevo local
POST /locales
Content-Type: application/json
{
  "nombre": "Salón Principal",
  "direccion": "Av. Central 456",
  "ciudad": "Madrid",
  "telefono": "555-2000",
  "capacidad": 300,
  "activo": true,
  "horario": "Lun-Dom 8:00-24:00"
}
```

#### Servicios
```bash
# Obtener todos los servicios
GET /servicios

# Crear un nuevo servicio
POST /servicios
Content-Type: application/json
{
  "nombre": "Catering Premium",
  "descripcion": "Servicio de catering de alta calidad",
  "precio": 75.50,
  "tipo": "Catering",
  "disponible": true,
  "duracion_minutos": 180
}
```

#### Eventos
```bash
# Obtener todos los eventos
GET /eventos

# Crear un nuevo evento
POST /eventos
Content-Type: application/json
{
  "nombre": "Boda de María y Carlos",
  "tipo": "Boda",
  "fecha_inicio": "2025-12-15T18:00:00",
  "fecha_fin": "2025-12-16T02:00:00",
  "descripcion": "Celebración de boda",
  "capacidad_maxima": 200,
  "ubicacion": "Salón Principal"
}
```

### 💼 Endpoints del Módulo Transaccional

#### Blogs
```bash
# Obtener todos los blogs
GET /blogs

# Crear un nuevo blog
POST /blogs
Content-Type: application/json
{
  "administrador_id": 1,
  "titulo": "Consejos para tu evento",
  "contenido": "Aquí van los consejos...",
  "etiquetas": "eventos,consejos,tips",
  "publicado_en": "2024-10-15",
  "actualizado_en": "2024-10-15"
}
```

#### Reservas
```bash
# Obtener todas las reservas
GET /reservas

# Crear una nueva reserva
POST /reservas
Content-Type: application/json
{
  "cliente_id": 1,
  "evento_id": 1,
  "numero_personas": 150,
  "estado_id": 1,
  "fecha_reserva": "2025-11-15T16:00:00",
  "creado_en": "2024-10-15",
  "actualizado_en": "2024-10-15"
}
```

#### Facturas
```bash
# Obtener todas las facturas
GET /facturas

# Crear una nueva factura
POST /facturas
Content-Type: application/json
{
  "reserva_id": 1,
  "fecha_emision": "2024-10-15",
  "estado_id": 1,
  "creado_en": "2024-10-15",
  "actualizado_en": "2024-10-15"
}
```

#### Pagos
```bash
# Obtener todos los pagos
GET /pagos

# Crear un nuevo pago
POST /pagos
Content-Type: application/json
{
  "factura_id": 1,
  "monto": 1500.00,
  "metodo_pago": "Tarjeta de Crédito",
  "estado_id": 1,
  "fecha_pago": "2024-10-15",
  "creado_en": "2024-10-15"
}
```

#### Notificaciones
```bash
# Obtener todas las notificaciones
GET /notificaciones

# Crear una nueva notificación
POST /notificaciones
Content-Type: application/json
{
  "usuario_id": 1,
  "titulo": "Pago recibido",
  "contenido": "Se ha recibido el pago de su reserva",
  "tipo": "pago",
  "enviado_en": "2024-10-15T10:30:00"
}
```

#### Reportes
```bash
# Obtener todos los reportes
GET /reportes

# Crear un nuevo reporte
POST /reportes
Content-Type: application/json
{
  "administrador_id": 1,
  "titulo": "Reporte Mensual",
  "descripcion": "Análisis de ventas del mes",
  "datos": "{\"ventas\": 15000, \"eventos\": 25}",
  "generado_en": "2024-10-15"
}
```

### 📊 Códigos de Respuesta HTTP

- `200 OK`: Operación exitosa
- `201 Created`: Recurso creado exitosamente
- `400 Bad Request`: Datos de entrada inválidos
- `404 Not Found`: Recurso no encontrado
- `500 Internal Server Error`: Error interno del servidor

### 🔍 Parámetros de Consulta

La mayoría de endpoints GET soportan parámetros de consulta para filtrado y paginación:

```bash
# Ejemplo con filtros
GET /clientes?activo=true
GET /eventos?tipo=Boda
GET /servicios?disponible=true&tipo=Catering
```

## 🧪 Ejecutar Pruebas

```bash
# Pruebas unitarias
npm run test

# Pruebas e2e
npm run test:e2e

# Cobertura de pruebas
npm run test:cov
```

## 🗂️ Estructura del Proyecto

```
src/
├── maestras/              # Módulo de datos maestros
│   ├── estados/          # Gestión de estados
│   └── tipos/            # Gestión de tipos
├── negocio/              # Módulo de negocio
│   ├── controllers/      # Controladores de negocio
│   ├── dto/             # Data Transfer Objects
│   ├── entities/        # Entidades de negocio
│   └── services/        # Servicios de negocio
├── transaccional/        # Módulo transaccional
│   ├── controllers/      # Controladores transaccionales
│   ├── dto/             # Data Transfer Objects
│   ├── entities/        # Entidades transaccionales
│   └── services/        # Servicios transaccionales
├── app.module.ts         # Módulo principal
├── main.ts              # Punto de entrada
└── seed.ts              # Datos de prueba
```

## 🛠️ Tecnologías Utilizadas

- **Framework**: NestJS
- **Lenguaje**: TypeScript
- **Base de Datos**: SQLite
- **ORM**: TypeORM
- **Validación**: class-validator
- **Transformación**: class-transformer

## 📝 Datos de Prueba

El proyecto incluye un archivo `seed.ts` que inserta datos de prueba en la base de datos:

```bash
# Ejecutar seed
npx ts-node src/seed.ts
```

### Datos incluidos:
- **Estados**: 5 registros (Confirmado, Pendiente, Cancelado, Completado, Vencido)
- **Tipos**: 5 registros (Boda, Conferencia, Cumpleaños, Catering, Decoración)
- **Usuarios**: 3 registros con diferentes roles
- **Clientes**: 3 registros de clientes
- **Locales**: 3 registros de locales con diferentes capacidades
- **Servicios**: 5 registros de servicios diversos
- **Eventos**: 4 registros de eventos programados
- **Blogs**: 3 artículos de blog
- **Reservas**: 3 reservas vinculadas a eventos
- **Facturas**: 3 facturas con diferentes estados
- **Pagos**: 3 registros de pagos
- **Notificaciones**: 4 notificaciones del sistema
- **Reportes**: 3 reportes de gestión

## 🚀 Deployment

Para desplegar la aplicación en producción:

```bash
# Construir para producción
npm run build

# Ejecutar en modo producción
npm run start:prod
```

## 📞 Contacto y Soporte

Para preguntas o soporte sobre el proyecto, contacta a cualquiera de los integrantes del equipo:

- **Steven Magallanes** - Módulo Maestras
- **Joao Moreira** - Módulo Negocio  
- **Carlos Valencia** - Módulo Transaccional

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
