import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { UpdateClienteDto } from '../dto/update-cliente.dto';
import { ClienteService } from '../services/cliente.service';

/**
 * Controlador para gestionar endpoints de clientes
 */
@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  /**
   * POST /clientes - Crear un nuevo cliente
   */
  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }

  /**
   * GET /clientes - Obtener todos los clientes
   */
  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  /**
   * GET /clientes/:id - Obtener un cliente por ID
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.clienteService.findOne(id);
  }

  /**
   * PATCH /clientes/:id - Actualizar un cliente
   */
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateClienteDto: UpdateClienteDto,
  ) {
    return this.clienteService.update(id, updateClienteDto);
  }

  /**
   * DELETE /clientes/:id - Eliminar un cliente
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.clienteService.remove(id);
  }
}
