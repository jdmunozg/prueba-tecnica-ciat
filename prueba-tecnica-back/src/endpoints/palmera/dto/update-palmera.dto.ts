import { PartialType } from '@nestjs/mapped-types';
import { CreatePalmeraDto } from './create-palmera.dto';

export class UpdatePalmeraDto extends PartialType(CreatePalmeraDto) {
  id: number;
}
