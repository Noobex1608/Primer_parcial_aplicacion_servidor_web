import { PartialType } from '@nestjs/mapped-types';
import { CreateTransaccionalDto } from './create-transaccional.dto';

export class UpdateTransaccionalDto extends PartialType(CreateTransaccionalDto) {}