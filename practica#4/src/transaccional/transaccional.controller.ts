import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransaccionalService } from './transaccional.service';
import { CreateTransaccionalDto } from './dto/create-transaccional.dto';
import { UpdateTransaccionalDto } from './dto/update-transaccional.dto';

@Controller('transaccional')
export class TransaccionalController {
  constructor(private readonly transaccionalService: TransaccionalService) {}

  @Post()
  create(@Body() createTransaccionalDto: CreateTransaccionalDto) {
    return this.transaccionalService.create(createTransaccionalDto);
  }

  @Get()
  findAll() {
    return this.transaccionalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transaccionalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransaccionalDto: UpdateTransaccionalDto) {
    return this.transaccionalService.update(+id, updateTransaccionalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transaccionalService.remove(+id);
  }
}
