import { ApartmentDTO } from './ApartmentDTO.dto';
import { BaseDTO } from './BaseDTO.dto';

export class ClientDTO extends BaseDTO {
  fisrtName: string;
  lasttName: string;
  email: string;
  mobile: string;
  country: string;
  apartments: ApartmentDTO[];
}
