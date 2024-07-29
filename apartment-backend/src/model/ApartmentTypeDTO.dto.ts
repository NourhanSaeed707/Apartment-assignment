import { ApartmentDTO } from './ApartmentDTO.dto';
import { BaseDTO } from './BaseDTO.dto';

export class ApartmentTypeDTO extends BaseDTO {
  name: string;
  apartments: ApartmentDTO[];
}
