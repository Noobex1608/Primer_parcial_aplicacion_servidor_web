# Módulo de Negocio - Entidades Core del Dominio

## 📋 Descripción

Este módulo implementa las **entidades de negocio principal** (operaciones core del dominio) del proyecto NestJS. Incluye la gestión completa de:

- 👥 **Clientes**: Gestión de información de clientes
- 🎉 **Eventos**: Administración de eventos
- 🏢 **Locales**: Gestión de establecimientos/locales
- 🛠️ **Servicios**: Catálogo de servicios ofrecidos
- 👤 **Usuarios**: Gestión de usuarios del sistema

## 🚀 Instalación de Dependencias

Antes de usar este módulo, asegúrate de instalar todas las dependencias necesarias:

```bash
# Dependencias principales de base de datos
npm install @nestjs/typeorm typeorm sqlite3

# Dependencias para validación de DTOs
npm install class-validator class-transformer

# Dependencias para documentación API (opcional)
npm install @nestjs/swagger swagger-ui-express

# Dependencias de desarrollo
npm install --save-dev @types/node
```

## 📁 Estructura del Módulo

```
negocio/
├── controllers/          # Controladores REST
│   ├── cliente.controller.ts
│   ├── evento.controller.ts
│   ├── local.controller.ts
│   ├── servicio.controller.ts
│   └── usuario.controller.ts
├── dto/                  # Data Transfer Objects
│   ├── create-cliente.dto.ts
│   ├── update-cliente.dto.ts
│   ├── create-evento.dto.ts
│   ├── update-evento.dto.ts
│   ├── create-local.dto.ts
│   ├── update-local.dto.ts
│   ├── create-servicio.dto.ts
│   ├── update-servicio.dto.ts
│   ├── create-usuario.dto.ts
│   └── update-usuario.dto.ts
├── entities/             # Entidades TypeORM
│   ├── Cliente.ts
│   ├── Evento.ts
│   ├── Local.ts
│   ├── Servicio.ts
│   └── Usuario.ts
├── services/             # Servicios de negocio
│   ├── cliente.service.ts
│   ├── evento.service.ts
│   ├── local.service.ts
│   ├── servicio.service.ts
│   └── usuario.service.ts
└── negocio.module.ts     # Módulo principal
```

## ⚙️ Configuración del Módulo

### 1. Importar en app.module.ts

```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NegocioModule } from './negocio/negocio.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'proyecto-equipo.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Solo para desarrollo
      logging: true,
    }),
    NegocioModule, // Importar el módulo de negocio
  ],
})
export class AppModule {}
```

### 2. Habilitar Validación Global

En el archivo `main.ts`:

```typescript
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar validación global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
```

## 🔌 Endpoints API

### Clientes (`/clientes`)

| Método | Endpoint        | Descripción                |
| ------ | --------------- | -------------------------- |
| POST   | `/clientes`     | Crear un nuevo cliente     |
| GET    | `/clientes`     | Obtener todos los clientes |
| GET    | `/clientes/:id` | Obtener un cliente por ID  |
| PATCH  | `/clientes/:id` | Actualizar un cliente      |
| DELETE | `/clientes/:id` | Eliminar un cliente        |

**Ejemplo de creación:**

```json
{
  "nombre_completo": "Juan Pérez",
  "direccion": "Calle Principal 123",
  "telefono": "555-1234",
  "email": "juan@example.com",
  "activo": true
}
```

### Eventos (`/eventos`)

| Método | Endpoint       | Descripción               |
| ------ | -------------- | ------------------------- |
| POST   | `/eventos`     | Crear un nuevo evento     |
| GET    | `/eventos`     | Obtener todos los eventos |
| GET    | `/eventos/:id` | Obtener un evento por ID  |
| PATCH  | `/eventos/:id` | Actualizar un evento      |
| DELETE | `/eventos/:id` | Eliminar un evento        |

**Ejemplo de creación:**

```json
{
  "nombre": "Conferencia Tech 2024",
  "tipo": "Conferencia",
  "fecha_inicio": "2024-12-01T10:00:00Z",
  "fecha_fin": "2024-12-01T18:00:00Z",
  "descripcion": "Evento tecnológico anual",
  "capacidad_maxima": 200,
  "ubicacion": "Auditorio Principal"
}
```

### Locales (`/locales`)

| Método | Endpoint       | Descripción               |
| ------ | -------------- | ------------------------- |
| POST   | `/locales`     | Crear un nuevo local      |
| GET    | `/locales`     | Obtener todos los locales |
| GET    | `/locales/:id` | Obtener un local por ID   |
| PATCH  | `/locales/:id` | Actualizar un local       |
| DELETE | `/locales/:id` | Eliminar un local         |

**Ejemplo de creación:**

```json
{
  "nombre": "Restaurante El Buen Sabor",
  "direccion": "Av. Principal 456",
  "ciudad": "Quito",
  "telefono": "555-5678",
  "capacidad": 100,
  "activo": true,
  "horario": "Lun-Dom: 12:00-22:00"
}
```

### Servicios (`/servicios`)

| Método | Endpoint         | Descripción                 |
| ------ | ---------------- | --------------------------- |
| POST   | `/servicios`     | Crear un nuevo servicio     |
| GET    | `/servicios`     | Obtener todos los servicios |
| GET    | `/servicios/:id` | Obtener un servicio por ID  |
| PATCH  | `/servicios/:id` | Actualizar un servicio      |
| DELETE | `/servicios/:id` | Eliminar un servicio        |

**Ejemplo de creación:**

```json
{
  "nombre": "Servicio de Catering",
  "descripcion": "Servicio completo de catering para eventos",
  "precio": 250.0,
  "tipo": "Catering",
  "disponible": true,
  "duracion_minutos": 180
}
```

### Usuarios (`/usuarios`)

| Método | Endpoint        | Descripción                |
| ------ | --------------- | -------------------------- |
| POST   | `/usuarios`     | Crear un nuevo usuario     |
| GET    | `/usuarios`     | Obtener todos los usuarios |
| GET    | `/usuarios/:id` | Obtener un usuario por ID  |
| PATCH  | `/usuarios/:id` | Actualizar un usuario      |
| DELETE | `/usuarios/:id` | Eliminar un usuario        |

**Ejemplo de creación:**

```json
{
  "nombre": "María González",
  "email": "maria@example.com",
  "contraseña": "password123",
  "rol": "cliente",
  "telefono": "555-9876",
  "activo": true
}
```

## ✅ Validaciones Implementadas

Cada DTO incluye validaciones con `class-validator`:

- **@IsString()**: Valida que sea una cadena de texto
- **@IsEmail()**: Valida formato de email
- **@IsNumber()**: Valida que sea un número
- **@IsBoolean()**: Valida que sea un booleano
- **@IsDateString()**: Valida formato de fecha
- **@IsOptional()**: Hace el campo opcional
- **@MinLength()**: Longitud mínima
- **@MaxLength()**: Longitud máxima
- **@Min()**: Valor mínimo para números

## 🧪 Pruebas con Postman/Thunder Client

### 1. Crear un Cliente

```
POST http://localhost:3000/clientes
Content-Type: application/json

{
  "nombre_completo": "Test User",
  "email": "test@example.com"
}
```

### 2. Obtener todos los Clientes

```
GET http://localhost:3000/clientes
```

### 3. Obtener un Cliente específico

```
GET http://localhost:3000/clientes/1
```

### 4. Actualizar un Cliente

```
PATCH http://localhost:3000/clientes/1
Content-Type: application/json

{
  "telefono": "555-0000"
}
```

### 5. Eliminar un Cliente

```
DELETE http://localhost:3000/clientes/1
```

## 🛠️ Características Implementadas

### ✅ Entidades TypeORM

- Decoradores `@Entity`, `@PrimaryGeneratedColumn`, `@Column`
- Al menos 4 propiedades por entidad
- Timestamps automáticos (`@CreateDateColumn`, `@UpdateDateColumn`)
- Tipos de datos apropiados y restricciones

### ✅ DTOs

- DTOs de creación (`create-*.dto.ts`)
- DTOs de actualización (`update-*.dto.ts`) usando `PartialType`
- Validaciones con `class-validator`
- Documentación con comentarios

### ✅ Servicios

- Repositorio inyectado con `@InjectRepository`
- Métodos CRUD completos:
  - `create()`: Crear registro
  - `findAll()`: Obtener todos
  - `findOne()`: Obtener por ID
  - `update()`: Actualizar registro
  - `remove()`: Eliminar registro
- Manejo de excepciones (`NotFoundException`)

### ✅ Controladores

- Decoradores HTTP: `@Post`, `@Get`, `@Patch`, `@Delete`
- `@Body()` para recibir DTOs
- `@Param()` con `ParseIntPipe` para validación de IDs
- Documentación de endpoints

### ✅ Módulo

- Importa `TypeOrmModule.forFeature()` con todas las entidades
- Declara todos los controladores
- Declara todos los servicios (providers)
- Exporta servicios para uso en otros módulos

## 📊 Modelo de Datos

### Cliente

- `id`: Identificador único
- `nombre_completo`: Nombre del cliente
- `direccion`: Dirección (opcional)
- `telefono`: Teléfono (opcional)
- `email`: Email único
- `activo`: Estado activo/inactivo
- `creado_en`: Fecha de creación
- `actualizado_en`: Fecha de actualización

### Evento

- `id`: Identificador único
- `nombre`: Nombre del evento
- `tipo`: Tipo de evento
- `fecha_inicio`: Fecha y hora de inicio
- `fecha_fin`: Fecha y hora de fin
- `descripcion`: Descripción (opcional)
- `capacidad_maxima`: Capacidad máxima (opcional)
- `ubicacion`: Ubicación (opcional)
- `creado_en`: Fecha de creación
- `actualizado_en`: Fecha de actualización

### Local

- `id`: Identificador único
- `nombre`: Nombre del local
- `direccion`: Dirección
- `ciudad`: Ciudad
- `telefono`: Teléfono
- `capacidad`: Capacidad total
- `activo`: Estado activo/inactivo
- `horario`: Horario de atención (opcional)
- `creado_en`: Fecha de creación
- `actualizado_en`: Fecha de actualización

### Servicio

- `id`: Identificador único
- `nombre`: Nombre del servicio
- `descripcion`: Descripción (opcional)
- `precio`: Precio (decimal)
- `tipo`: Tipo de servicio
- `disponible`: Disponibilidad
- `duracion_minutos`: Duración en minutos (opcional)
- `creado_en`: Fecha de creación
- `actualizado_en`: Fecha de actualización

### Usuario

- `id`: Identificador único
- `nombre`: Nombre del usuario
- `email`: Email único
- `contraseña`: Contraseña
- `rol`: Rol del usuario (default: 'cliente')
- `telefono`: Teléfono (opcional)
- `activo`: Estado activo/inactivo
- `creado_en`: Fecha de creación
- `actualizado_en`: Fecha de actualización

## 🎯 Checklist de Cumplimiento de Rúbrica

- [x] **Entidad TypeORM** con al menos 4 propiedades
- [x] **Clave primaria** autoincremental (`@PrimaryGeneratedColumn`)
- [x] **Decoradores apropiados** (`@Column`, `@Entity`, etc.)
- [x] **Tipos de datos apropiados** y restricciones
- [x] **DTOs de creación** (`create-*.dto.ts`)
- [x] **DTOs de actualización** (`update-*.dto.ts`) con propiedades opcionales
- [x] **Validaciones** con `class-validator`
- [x] **Documentación** de propiedades con comentarios
- [x] **Servicio** con repositorio inyectado
- [x] **Métodos CRUD**: create, findAll, findOne, update, remove
- [x] **Controlador** con servicio inyectado
- [x] **Endpoints REST**: POST, GET, GET/:id, PATCH/:id, DELETE/:id
- [x] **@Body()** para recibir DTOs
- [x] **@Param('id')** con `ParseIntPipe`
- [x] **Módulo** configurado con TypeOrmModule.forFeature
- [x] **Controladores y servicios** declarados en el módulo
- [x] **Servicios exportados** para uso en otros módulos

## 🚀 Ejecución del Proyecto

```bash
# Iniciar en modo desarrollo
npm run start:dev

# El servidor estará disponible en http://localhost:3000
```

## 📝 Notas Importantes

1. **Base de Datos**: Se usa SQLite para desarrollo. El archivo `proyecto-equipo.sqlite` se creará automáticamente.

2. **Sincronización**: `synchronize: true` está habilitado solo para desarrollo. En producción debe ser `false`.

3. **Validación**: Las validaciones se activan con `ValidationPipe` en `main.ts`.

4. **Timestamps**: Todas las entidades tienen campos `creado_en` y `actualizado_en` que se gestionan automáticamente.

5. **Manejo de Errores**: Los servicios lanzan `NotFoundException` cuando no se encuentra un registro.

## 👥 Autor

**Integrante 2**: Entidades de negocio principal (operaciones core del dominio)

---

**Fecha**: Octubre 2024
