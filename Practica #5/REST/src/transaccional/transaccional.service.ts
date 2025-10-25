import { Injectable } from '@nestjs/common';
import { CreateTransaccionalDto } from './dto/create-transaccional.dto';
import { UpdateTransaccionalDto } from './dto/update-transaccional.dto';

@Injectable()
export class TransaccionalService {
  create(createTransaccionalDto: CreateTransaccionalDto) {
    return 'This action adds a new transaccional';
  }

  findAll() {
    return `This action returns all transaccional`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaccional`;
  }

  update(id: number, updateTransaccionalDto: UpdateTransaccionalDto) {
    return `This action updates a #${id} transaccional`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaccional`;
  }
}
