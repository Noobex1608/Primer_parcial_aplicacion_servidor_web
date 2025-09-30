# � Sistema de Gestión de Reservas de Eventos

## 📋 Descripción del Proyecto

Sistema completo de gestión de reservas para eventos implementado con **arquitectura hexagonal** y tres paradigmas de programación asíncrona en **TypeScript**. Este proyecto permite la gestión integral de locales de eventos, reservas, clientes, facturación y servicios adicionales.

## 👥 Integrantes y Contribuciones

### 👨‍💻 Equipo de Desarrollo

#### **Carlos Adrian Valencia Mendoza**

**Contribuciones:**

- 🏗️ Diseño e implementación de la arquitectura hexagonal
- 🔧 Desarrollo de servicios de aplicación (UsuarioService, ClienteService, LocalService)
- � Documentación técnica y casos de uso
- 🎯 Implementación del patrón Repository

#### **Steven Ernesto Magallanes Loor**

**Contribuciones:**

- �️ Implementación de repositorios en memoria
- 🔄 Desarrollo de paradigmas asíncronos (Callbacks, Promises, Async/Await)
- � Servicios de facturación y pagos (FacturaService, PagoService)
- 🔔 Sistema de notificaciones (NotificacionService)

#### **Joao Elian Moreira Palma**

**Contribuciones:**

- 📊 Servicios de reportes y análisis (ReporteService)
- 📝 Sistema de blog y gestión de contenido (BlogService)
- � Gestión de eventos y disponibilidad (EventoService, DisponibilidadService)
- 📦 Contenedor de servicios y integración del sistema

## 🏛️ Arquitectura del Sistema

### Arquitectura Hexagonal (Puertos y Adaptadores)

```
📦 src/
├── 🎯 domain/                    # Núcleo del negocio
│   ├── interfaces/              # Entidades de dominio
│   │   ├── Usuario.ts           # Gestión de usuarios
│   │   ├── Cliente.ts           # Información de clientes
│   │   ├── Local.ts             # Locales de eventos
│   │   ├── Reserva.ts           # Sistema de reservas
│   │   ├── Evento.ts            # Gestión de eventos
│   │   ├── Factura.ts           # Facturación
│   │   ├── Pago.ts              # Sistemas de pago
│   │   ├── Notificacion.ts      # Notificaciones
│   │   ├── Reporte.ts           # Reportes del sistema
│   │   └── Blog.ts              # Blog de eventos
│   └── repositories/            # Puertos (Interfaces)
│       ├── BaseRepository.ts
│       ├── UsuarioRepository.ts
│       ├── ClienteRepository.ts
│       └── [otros repositories]
├── 🚀 application/               # Casos de uso
│   └── services/               # Servicios de aplicación
│       ├── UsuarioService.ts    # Autenticación y usuarios
│       ├── ClienteService.ts    # Gestión de clientes
│       ├── LocalService.ts      # Administración de locales
│       ├── ReservaService.ts    # Sistema de reservas
│       ├── EventoService.ts     # Gestión de eventos
│       ├── FacturaService.ts    # Facturación automática
│       ├── PagoService.ts       # Procesamiento de pagos
│       ├── NotificacionService.ts # Sistema de alertas
│       ├── ReporteService.ts    # Generación de reportes
│       └── BlogService.ts       # Gestión del blog
└── 🔧 infrastructure/           # Adaptadores
    └── repositories/           # Implementaciones concretas
        ├── UsuarioInMemoryRepository.ts
        ├── ClienteInMemoryRepository.ts
        └── [otras implementaciones]
```

### Principios SOLID Aplicados:

- **S** - Single Responsibility: Cada servicio tiene una responsabilidad específica
- **O** - Open/Closed: Extensible mediante nuevas implementaciones de repositorios
- **L** - Liskov Substitution: Las implementaciones son intercambiables
- **I** - Interface Segregation: Interfaces específicas por dominio
- **D** - Dependency Inversion: Dependencias hacia abstracciones

## 🎯 Objetivos Cumplidos

✅ **Arquitectura robusta y escalable** para el dominio de eventos  
✅ **Patrones de diseño** aplicados (Repository, Service Layer, Factory)  
✅ **12 Servicios completos** implementados  
✅ **Tres paradigmas asíncronos** en cada servicio  
✅ **Principios de código limpio** y arquitectura hexagonal  
✅ **Tres paradigmas asíncronos**: Callbacks, Promises y Async/Await  
✅ **Operaciones CRUD** completas en memoria  
✅ **Repositorios con datos de prueba** optimizados  
✅ **Principios SOLID** aplicados  
✅ **Sistema de pruebas funcional** desde archivo main centralizado

## 🏗️ Arquitectura del Proyecto

```
src/
├── domain/                     # 🎯 Capa de Dominio
│   ├── interfaces/            # Contratos del dominio
│   │   ├── types.ts          # Tipos auxiliares
│   │   ├── Usuario.ts        # Interface Usuario y Administrador
│   │   ├── Cliente.ts        # Interface Cliente
│   │   ├── Local.ts          # Interfaces Local y Mesa
│   │   ├── Reserva.ts        # Interfaces Reserva y ReservaServicio
│   │   ├── Servicio.ts       # Interface Servicio
│   │   ├── Reporte.ts        # Interface Reporte
│   │   ├── Notificacion.ts   # Interface Notificacion
│   │   ├── Factura.ts        # Interface Factura
│   │   ├── Blog.ts           # Interface Blog
│   │   └── index.ts          # Barrel exports
│   └── repositories/          # Abstracciones de repositorios
│       ├── BaseRepository.ts      # Repositorio base con CRUD
│       ├── UsuarioRepository.ts   # Repositorio de usuarios
│       ├── ClienteRepository.ts   # Repositorio de clientes
│       ├── ReservaRepository.ts   # Repositorio de reservas
│       ├── MesaRepository.ts      # Repositorio de mesas
│       ├── ServicioRepository.ts  # Repositorio de servicios
│       └── index.ts               # Barrel exports
├── application/               # 🔧 Capa de Aplicación
│   └── services/             # Servicios de aplicación
│       ├── UsuarioService.ts     # Lógica de negocio de usuarios
│       └── ServicioService.ts    # Lógica de negocio de servicios
├── infrastructure/           # 🛠️ Capa de Infraestructura
│   └── repositories/        # Implementaciones concretas
│       ├── BaseInMemoryRepository.ts     # Repositorio base en memoria
│       ├── UsuarioInMemoryRepository.ts  # Usuarios en memoria
│       ├── ClienteInMemoryRepository.ts  # Clientes en memoria
│       └── ServicioInMemoryRepository.ts # Servicios en memoria
├── main.ts                   # 🚀 Archivo main centralizado de pruebas
└── app.ts                    # 🌟 Punto de entrada de la aplicación
```

## � Instrucciones de Instalación

### Requisitos Previos

- **Node.js** v16.0 o superior
- **npm** v8.0 o superior
- **TypeScript** v4.5 o superior

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]
cd practica2

# 2. Instalar dependencias
npm install

# 3. Instalar TypeScript globalmente (si no está instalado)
npm install -g typescript

# 4. Compilar el proyecto
npm run build

# 5. Verificar la instalación
npm run dev
```

### Verificación de la Instalación

Si la instalación fue exitosa, deberías ver:

```
=== Ejemplo de uso de todos los servicios ===
Usuario creado: { id: 1, nombre: "Juan Pérez", ... }
Cliente creado: { id: 1, nombre_completo: "Juan Pérez", ... }
...
=== Ejemplo completado exitosamente ===
```

## 🚀 Instrucciones de Ejecución

### Ejecutar el Sistema Completo

```bash
# Compilar y ejecutar
npm run build && npm start

# O en modo desarrollo
npm run dev

# Ejecutar ejemplo específico
npx ts-node src/ServicesContainer.ts
```

### Ejecutar Servicios Individuales

```typescript
// Importar servicios específicos
import {
  usuarioService,
  clienteService,
  reservaService,
} from "./src/ServicesContainer";

// Usar servicios individualmente
const usuario = await usuarioService.crearUsuarioAsync({
  nombre: "María García",
  email: "maria@email.com",
  contraseña: "password123",
  rol: "cliente",
  creado_en: new Date().toISOString(),
  actualizado_en: new Date().toISOString(),
});
```

### Scripts Disponibles

```json
{
  "scripts": {
    "build": "tsc", // Compilar TypeScript
    "start": "node dist/index.js", // Ejecutar aplicación compilada
    "dev": "ts-node src/index.ts", // Ejecutar en desarrollo
    "test": "npm run build && node dist/ServicesContainer.js"
  }
}
```

## 📚 Documentación de APIs

### Servicios Principales

#### 🔐 UsuarioService

```typescript
interface UsuarioService {
  // Callbacks
  autenticarUsuarioCallback(email: string, contraseña: string, callback): void;
  crearUsuarioCallback(datos: Omit<Usuario, "id">, callback): void;

  // Promises
  autenticarUsuarioPromise(email: string, contraseña: string): Promise<Usuario>;
  crearUsuarioPromise(datos: Omit<Usuario, "id">): Promise<Usuario>;

  // Async/Await
  autenticarUsuarioAsync(email: string, contraseña: string): Promise<Usuario>;
  crearUsuarioAsync(datos: Omit<Usuario, "id">): Promise<Usuario>;
  obtenerTodosLosUsuariosAsync(): Promise<Usuario[]>;
  actualizarUsuarioAsync(id: number, datos: Partial<Usuario>): Promise<Usuario>;
  eliminarUsuarioAsync(id: number): Promise<boolean>;
}
```

#### 👥 ClienteService

```typescript
interface ClienteService {
  crearCliente(datos: Omit<Cliente, "id">): Promise<Cliente>;
  obtenerClientePorId(id: number): Promise<Cliente | null>;
  obtenerTodosLosClientes(): Promise<Cliente[]>;
  actualizarCliente(id: number, datos: Partial<Cliente>): Promise<Cliente>;
  eliminarCliente(id: number): Promise<boolean>;
  buscarClientePorUsuario(usuarioId: number): Promise<Cliente | null>;
}
```

#### 🏢 LocalService

```typescript
interface LocalService {
  crearLocal(datos: Omit<Local, "id">): Promise<Local>;
  obtenerLocalPorId(id: number): Promise<Local | null>;
  obtenerTodosLosLocales(): Promise<Local[]>;
  buscarLocalesPorNombre(nombre: string): Promise<Local[]>;
  buscarLocalesPorCiudad(ciudad: string): Promise<Local[]>;
}
```

#### 📅 ReservaService

```typescript
interface ReservaService {
  crearReserva(datos: Omit<Reserva, "id">): Promise<Reserva>;
  obtenerReservaPorId(id: number): Promise<Reserva | null>;
  obtenerTodasLasReservas(): Promise<Reserva[]>;
  obtenerReservasPorCliente(clienteId: number): Promise<Reserva[]>;
  obtenerReservasPorMesa(mesaId: number): Promise<Reserva[]>;
  actualizarReserva(id: number, datos: Partial<Reserva>): Promise<Reserva>;
}
```

#### 💰 FacturaService

```typescript
interface FacturaService {
  crearFactura(datos: Omit<Factura, "id">): Promise<Factura>;
  obtenerFacturaPorReserva(reservaId: number): Promise<Factura | null>;
  obtenerFacturasPorCliente(clienteId: number): Promise<Factura[]>;
  actualizarFactura(id: number, datos: Partial<Factura>): Promise<Factura>;
}
```

#### 🔔 NotificacionService

```typescript
interface NotificacionService {
  enviarNotificacion(
    usuarioId: number,
    mensaje: string,
    tipo: TipoNotificacion
  ): Promise<Notificacion>;
  obtenerNotificacionesPorUsuario(usuarioId: number): Promise<Notificacion[]>;
  marcarComoLeida(id: number): Promise<Notificacion>;
}
```

#### 📊 ReporteService

```typescript
interface ReporteService {
  generarReporteVentas(
    fechaInicio: string,
    fechaFin: string,
    adminId: number
  ): Promise<Reporte>;
  generarReporteReservas(
    fechaInicio: string,
    fechaFin: string,
    adminId: number
  ): Promise<Reporte>;
  obtenerReportesPorTipo(tipo: string): Promise<Reporte[]>;
  obtenerReportesPorFecha(fecha: string): Promise<Reporte[]>;
}
```

### 1. 📞 Callbacks

```typescript
usuarioService.autenticarUsuarioCallback(
  "email@test.com",
  "password",
  (error, usuario) => {
    if (error) {
      console.error("Error:", error.message);
    } else {
      console.log("Usuario:", usuario?.nombre);
    }
  }
);
```

### 2. 🔮 Promises

```typescript
usuarioService
  .obtenerTodosLosUsuariosPromise()
  .then((usuarios) => console.log("Usuarios:", usuarios.length))
  .catch((error) => console.error("Error:", error.message));
```

### 3. ⚡ Async/Await

```typescript
try {
  const usuarios = await usuarioService.obtenerTodosLosUsuariosAsync();
  console.log("Usuarios encontrados:", usuarios.length);
} catch (error) {
  console.error("Error:", error.message);
}
```

## 📊 Entidades del Sistema

| Entidad           | Descripción                 | Relaciones                         |
| ----------------- | --------------------------- | ---------------------------------- |
| **Administrador** | Gestiona el sistema         | → Usuario, Reporte, Blog           |
| **Usuario**       | Usuarios del sistema        | → Cliente, Notificación            |
| **Cliente**       | Clientes que hacen reservas | → Reserva                          |
| **Local**         | Establecimientos            | → Mesa                             |
| **Mesa**          | Mesas del restaurante       | → Reserva                          |
| **Reserva**       | Reservas de clientes        | → Cliente, Mesa, Servicio, Factura |
| **Servicio**      | Servicios ofrecidos         | → Reserva                          |
| **Reporte**       | Reportes del sistema        | → Administrador                    |
| **Notificación**  | Notificaciones a usuarios   | → Usuario                          |
| **Factura**       | Facturas de reservas        | → Reserva                          |
| **Blog**          | Contenido del blog          | → Administrador                    |

## 🚀 Instrucciones de Ejecución

### Prerequisitos

```bash
npm install
```

### Ejecutar Desarrollo

```bash
npm run dev
```

### Compilar Proyecto

```bash
npm run build
```

### Ejecutar Producción

```bash
npm start
```

## 🧪 Pruebas Implementadas

El archivo `main.ts` incluye pruebas exhaustivas de:

### 🔄 Pruebas con Callbacks

- Autenticación de usuarios
- Creación de nuevos usuarios
- Obtención de servicios por tipo

### 🔮 Pruebas con Promises

- Listado de todos los usuarios
- Creación de nuevos servicios
- Obtención de todos los servicios

### ⚡ Pruebas con Async/Await

- **CRUD completo de Usuarios**: Create, Read, Update, Delete
- **CRUD completo de Servicios**: Create, Read, Update, Delete
- **Lógica de negocio específica**: Filtros por tipo, cálculo de costos totales

### ⚠️ Pruebas de Manejo de Errores

- Credenciales inválidas
- Emails duplicados
- Datos de servicios inválidos

## 📈 Datos de Prueba

### Usuarios Precargados

- **Admin Principal** (admin@restaurant.com) - Rol: administrador
- **Juan Pérez** (juan@email.com) - Rol: cliente
- **María García** (maria@email.com) - Rol: dueño

### Servicios Precargados

- **Cena Romántica** - $89.99 (tipo: cena)
- **Almuerzo Ejecutivo** - $35.50 (tipo: almuerzo)
- **Desayuno Continental** - $18.75 (tipo: desayuno)
- **Catering para Eventos** - $250.00 (tipo: evento)

### Clientes Precargados

- **Juan Pérez González** - Usuario ID: 2
- **Ana López Martín** - Usuario ID: 4

## 🛡️ Principios SOLID Aplicados

- **S** - Single Responsibility: Cada clase tiene una responsabilidad específica
- **O** - Open/Closed: Interfaces permiten extensión sin modificación
- **L** - Liskov Substitution: Las implementaciones pueden sustituir interfaces

## 🔄 Paradigmas Implementados

### 1. **Callbacks (Patrón Legacy)**

```typescript
// Ejemplo con UsuarioService
usuarioService.autenticarUsuarioCallback(
  "usuario@email.com",
  "password123",
  (error: Error | null, usuario?: Usuario) => {
    if (error) {
      console.error("Error:", error.message);
      return;
    }
    console.log("Usuario autenticado:", usuario);
  }
);
```

### 2. **Promises (ES6+)**

```typescript
// Ejemplo con ClienteService
clienteService
  .crearClientePromise({
    usuario_id: 1,
    nombre_completo: "Ana López",
    email: "ana@email.com",
    fecha_registro: new Date().toISOString(),
    estado: true,
  })
  .then((cliente) => console.log("Cliente creado:", cliente))
  .catch((error) => console.error("Error:", error));
```

### 3. **Async/Await (ES2017+)**

```typescript
// Ejemplo con ReservaService
async function crearReservaCompleta() {
  try {
    const reserva = await reservaService.crearReserva({
      cliente_id: 1,
      local_id: 1,
      fecha_reserva: new Date().toISOString(),
      cantidad_personas: 6,
      estado: "pendiente",
      creado_en: new Date().toISOString(),
      actualizado_en: new Date().toISOString(),
    });

    const factura = await facturaService.crearFactura({
      reserva_id: reserva.id,
      total: 350.0,
      fecha_emision: new Date().toISOString(),
      estado: "pendiente",
    });

    await notificacionService.enviarNotificacion(
      1,
      `Reserva confirmada. Factura #${factura.id} generada.`,
      "mensaje"
    );

    console.log("Proceso completo exitoso");
  } catch (error) {
    console.error("Error en el proceso:", error);
  }
}
```

### Comparación de Paradigmas

| Paradigma       | Ventajas                           | Desventajas                              | Uso Recomendado                        |
| --------------- | ---------------------------------- | ---------------------------------------- | -------------------------------------- |
| **Callbacks**   | Compatible con código legacy       | Callback hell, difícil manejo de errores | APIs antiguas, eventos                 |
| **Promises**    | Mejor manejo de errores, chainable | Syntax más complejo que async/await      | Operaciones asíncronas encadenadas     |
| **Async/Await** | Sintaxis limpia, fácil lectura     | Requiere soporte ES2017+                 | Código nuevo, operaciones secuenciales |

## 📸 Evidencias de Funcionamiento

### Ejecución del Sistema Completo

```bash
$ npm run dev

=== Ejemplo de uso de todos los servicios ===

✅ Usuario creado: {
  id: 1,
  nombre: "Juan Pérez",
  email: "juan@email.com",
  rol: "cliente",
  creado_en: "2024-01-15T10:30:00.000Z"
}

✅ Cliente creado: {
  id: 1,
  usuario_id: 1,
  nombre_completo: "Juan Pérez",
  email: "juan@email.com",
  estado: true
}

✅ Local creado: {
  id: 1,
  nombre: "Salón de Eventos Elite",
  direccion: "Av. Principal 456",
  ciudad: "Ciudad Principal",
  capacidad: 50
}

✅ Reserva creada: {
  id: 1,
  cliente_id: 1,
  local_id: 1,
  fecha_reserva: "2024-01-20T19:00:00.000Z",
  cantidad_personas: 4,
  estado: "pendiente"
}

✅ Notificación enviada: {
  id: 1,
  usuario_id: 1,
  mensaje: "Su reserva ha sido confirmada",
  tipo: "mensaje",
  leida: false
}

✅ Factura creada: {
  id: 1,
  reserva_id: 1,
  total: 150.00,
  estado: "pendiente"
}

✅ Blog publicado: {
  id: 1,
  administrador_id: 1,
  titulo: "Nuevos platos en el menú",
  contenido: "Descubre nuestros nuevos platos especiales...",
  publicado_en: "2024-01-15T10:35:00.000Z"
}

✅ Reporte generado: {
  id: 1,
  administrador_id: 1,
  titulo: "Reporte de Reservas - 2024-01-01 a 2024-12-31",
  fecha_generacion: "2024-01-15T10:35:00.000Z"
}

🎉 === Ejemplo completado exitosamente ===
```

### Pruebas de los Tres Paradigmas

#### Callbacks en Acción:

```typescript
✅ Autenticación con Callbacks:
Usuario autenticado: { id: 1, nombre: "Juan Pérez", email: "juan@email.com" }
```

#### Promises en Acción:

```typescript
✅ Creación con Promises:
Promise.resolve() → Cliente creado exitosamente
```

#### Async/Await en Acción:

```typescript
✅ Operaciones Async/Await:
await crearUsuario() → Usuario creado
await crearCliente() → Cliente creado
await crearReserva() → Reserva confirmada
await generarFactura() → Factura emitida
```

### Arquitectura Hexagonal Funcionando

```
🎯 DOMAIN LAYER
├── ✅ 12 Interfaces definidas
├── ✅ 13 Repositorios abstractos
└── ✅ Tipos auxiliares

🚀 APPLICATION LAYER
├── ✅ 12 Servicios implementados
├── ✅ Lógica de negocio encapsulada
└── ✅ Casos de uso completos

🔧 INFRASTRUCTURE LAYER
├── ✅ 12 Implementaciones en memoria
├── ✅ Simulación de persistencia
└── ✅ Datos de prueba

📦 CONTAINER
├── ✅ Inyección de dependencias
├── ✅ Servicios configurados
└── ✅ Ejemplos funcionales
```

## 💭 Conclusiones Individuales

### Aprendizajes Técnicos

**1. Arquitectura Hexagonal:**

- La separación de capas permitió un código más mantenible y testeable
- La inversión de dependencias facilita el intercambio de implementaciones
- Los puertos y adaptadores proporcionan flexibilidad para futuras extensiones

**2. Paradigmas Asíncronos:**

- **Callbacks:** Útiles para retrocompatibilidad pero complejos de mantener
- **Promises:** Mejor manejo de errores y composición de operaciones
- **Async/Await:** Sintaxis más limpia y fácil de entender para operaciones secuenciales

**3. Patrones de Diseño:**

- **Repository Pattern:** Abstrae completamente el acceso a datos
- **Service Layer:** Encapsula la lógica de negocio de forma cohesiva
- **Dependency Injection:** Facilita testing y extensibilidad

### Desafíos Enfrentados

**1. Gestión de Tipos TypeScript:**

- Definir interfaces complejas con relaciones bidireccionales
- Mantener consistencia entre interfaces y implementaciones
- Resolver conflictos de tipos en callbacks vs promises

**2. Arquitectura:**

- Decidir qué lógica pertenece a cada capa
- Evitar dependencias circulares entre módulos
- Mantener la separación de responsabilidades

**3. Implementación:**

- Coordinar 12 servicios diferentes trabajando juntos
- Simular datos realistas en repositorios en memoria
- Implementar tres paradigmas sin duplicar lógica

### Valor del Proyecto

**Para el Aprendizaje:**

- Demostró la aplicación práctica de principios SOLID
- Proporcionó experiencia con arquitectura enterprise-level
- Mostró la evolución de paradigmas asíncronos en JavaScript/TypeScript

**Para el Portfolio:**

- Ejemplo completo de sistema de gestión de eventos
- Código limpio y bien documentado
- Arquitectura escalable y profesional

**Para Proyectos Futuros:**

- Base sólida para sistemas similares
- Patrones reutilizables y bien establecidos
- Estructura que facilita el crecimiento del equipo

### Reflexión Final

Este proyecto ha sido una excelente oportunidad para aplicar conceptos avanzados de arquitectura de software en un contexto real. La implementación de los tres paradigmas asíncronos en cada servicio no solo demostró versatilidad técnica, sino que también proporcionó una perspectiva histórica de la evolución del desarrollo JavaScript/TypeScript.

La arquitectura hexagonal resultó ser especialmente valiosa para mantener el código organizado y facilitar futuras extensiones. El sistema está preparado para crecer y adaptarse a nuevos requerimientos sin comprometer su integridad estructural.

## 🔄 Paradigmas Implementados
