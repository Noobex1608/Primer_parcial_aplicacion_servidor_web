# Sistema de Gestión de Reservas y Eventos

Este proyecto implementa un sistema completo de gestión de reservas y eventos utilizando TypeORM con TypeScript.

## 📋 Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn

## 🚀 Instalación

```bash
# Instalar dependencias
npm install
```

## 📊 Estructura del Proyecto

```
src/
├── entity/          # Entidades TypeORM (modelos de datos)
├── service/         # Servicios CRUD para cada entidad
├── data-source.ts   # Configuración de TypeORM
├── main.ts          # Script principal con seeding y pruebas
└── index.ts         # Script de ejemplo básico
```

## 🎯 Entidades Implementadas

- **Usuario**: Usuarios del sistema (clientes y administradores)
- **Cliente**: Información de clientes
- **Administrador**: Información de administradores
- **Local**: Locales disponibles para eventos
- **Servicio**: Servicios ofrecidos (catering, decoración, etc.)
- **Reserva**: Reservas realizadas por clientes
- **Factura**: Facturas generadas por reservas
- **Pago**: Pagos realizados a facturas
- **Evento**: Eventos organizados
- **Estado**: Estados del sistema (activo, pendiente, etc.)
- **Blog**: Posts de blog del sistema
- **Notificacion**: Notificaciones a usuarios
- **Mesa**: Mesas disponibles en locales
- Y más...

## 💻 Ejecución

### Ejecutar el script principal (con seeding y pruebas CRUD)

```bash
npm run main
```

Este script:
1. ✅ Inicializa la conexión a la base de datos SQLite
2. 🌱 Inserta datos de prueba (seeding) demostrando relaciones
3. 🧪 Ejecuta pruebas de todos los métodos CRUD:
   - `create()` - Crear nuevos registros
   - `findAll()` - Obtener todos los registros
   - `findOne()` - Obtener un registro por ID
   - `update()` - Actualizar un registro
   - `remove()` - Eliminar un registro

### Ejecutar el script de ejemplo básico

```bash
npm start
```

## 🏗️ Servicios CRUD Implementados

Cada servicio implementa los siguientes métodos:

```typescript
class <Entidad>Service {
    create(data: Partial<Entidad>): Promise<Entidad>
    findAll(): Promise<Entidad[]>
    findOne(id: number): Promise<Entidad | null>
    update(id: number, data: Partial<Entidad>): Promise<Entidad | null>
    remove(id: number): Promise<boolean>
}
```

### Servicios Disponibles:
- `UsuarioService`
- `ClienteService`
- `AdministradorService`
- `LocalService`
- `ServicioService`
- `ReservaService`
- `FacturaService`
- `PagoService`
- `EventoService`
- `EstadoService`
- `BlogService`
- `NotificacionService`
- `ReporteService`
- `MesaService`

## 📐 Generación del Diagrama Entidad-Relación (DER)

### Opción 1: Script Personalizado (Recomendado) ✨

Usa nuestro generador personalizado que crea código PlantUML:

```bash
npm run generate-erd
```

Este comando:
1. 🔍 Lee todas las entidades y sus relaciones desde TypeORM
2. 📝 Genera código PlantUML con el diagrama completo
3. 📋 Te muestra el código para copiar

**Pasos siguientes:**
1. Copia todo el código PlantUML que aparece en la consola (desde `@startuml` hasta `@enduml`)
2. Pégalo en una de estas herramientas online:
   - 🔗 [PlantUML Online](https://www.plantuml.com/plantuml/uml/)
   - 🔗 [PlantText](http://www.planttext.com/)
3. 🖼️ El diagrama se generará automáticamente
4. 💾 Descarga la imagen en formato PNG o SVG

### Opción 2: Usar dbdiagram.io

1. Exportar el schema de la base de datos:
```bash
npm run schema:log > schema.sql
```

2. Visitar [dbdiagram.io](https://dbdiagram.io/)
3. Importar el schema SQL
4. Generar el diagrama visual

### Opción 3: Ver el schema SQL generado

```bash
npm run schema:sync
```

Esto sincronizará el schema con la base de datos y podrás ver la estructura en `database.sqlite`.

### Opción 4: Usar herramientas de visualización SQLite

```bash
# Instalar DB Browser for SQLite (interfaz gráfica)
# Descarga desde: https://sqlitebrowser.org/

# Luego abre el archivo database.sqlite con la aplicación
```

## 🗄️ Base de Datos

El proyecto usa SQLite para desarrollo. El archivo de base de datos se crea automáticamente en:
```
database.sqlite
```

## 📝 Ejemplo de Uso de los Servicios

```typescript
import { UsuarioService } from "./service/UsuarioService";
import { AppDataSource } from "./data-source";

// Inicializar conexión
await AppDataSource.initialize();

// Crear instancia del servicio
const usuarioService = new UsuarioService();

// Crear usuario
const nuevoUsuario = await usuarioService.create({
    nombre: "Juan Pérez",
    email: "juan@example.com",
    contraseña: "password123",
    rol: "cliente"
});

// Obtener todos los usuarios
const usuarios = await usuarioService.findAll();

// Obtener un usuario por ID
const usuario = await usuarioService.findOne(1);

// Actualizar usuario
const actualizado = await usuarioService.update(1, {
    telefono: "555-0000"
});

// Eliminar usuario
const eliminado = await usuarioService.remove(1);
```

## 🔗 Relaciones entre Entidades

El sistema implementa las siguientes relaciones:

- **Usuario** → Cliente (OneToOne)
- **Usuario** → Administrador (OneToOne)
- **Usuario** → Eventos (OneToMany)
- **Local** → Reservas (OneToMany)
- **Local** → Servicios (OneToMany)
- **Reserva** → Factura (OneToMany)
- **Factura** → Pagos (OneToMany)
- **Reserva** → Local (ManyToOne)
- Y muchas más...

## 🧪 Pruebas

El script `main.ts` incluye pruebas completas de:
- ✅ Creación de datos relacionados
- ✅ Consulta de todos los registros
- ✅ Búsqueda por ID
- ✅ Actualización de registros
- ✅ Eliminación de registros

## 📦 Dependencias

- `typeorm`: ORM para TypeScript/JavaScript
- `reflect-metadata`: Requerido para decoradores de TypeORM
- `sqlite3`: Driver de SQLite
- `typescript`: Compilador de TypeScript
- `ts-node`: Ejecutor de TypeScript

## ✨ Características

- ✅ 14+ Entidades completas con relaciones
- ✅ 14+ Servicios CRUD completos
- ✅ Seeding de datos de prueba
- ✅ Pruebas funcionales de todos los métodos CRUD
- ✅ Soporte para generación de DER
- ✅ Base de datos SQLite (fácil de usar)
- ✅ TypeScript con tipado fuerte
- ✅ Decoradores de TypeORM para definir entidades

## 🎓 Notas para el Profesor

Este proyecto cumple con todos los requisitos solicitados:

1. ✅ **Clases de Servicio**: 14 servicios implementados con lógica CRUD completa
2. ✅ **Acceso a Repositorio**: Los servicios obtienen repositorios de AppDataSource
3. ✅ **Implementación CRUD**: Todos los servicios implementan los 5 métodos obligatorios
4. ✅ **Script Principal**: `main.ts` es el punto de entrada ejecutable
5. ✅ **Inicialización**: AppDataSource se inicializa correctamente
6. ✅ **Seed de Datos**: Inserción completa de datos de prueba con relaciones
7. ✅ **Pruebas CRUD**: Todas las operaciones CRUD probadas con console.log
8. ✅ **Generación DER**: Instrucciones y scripts incluidos en README

Para ejecutar y ver todas las funcionalidades:
```bash
npm install
npm run main
```

