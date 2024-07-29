import { ApartmentDTO } from './ApartmentDTO.dto';
import { BaseDTO } from './BaseDTO.dto';

export class ImageDTO extends BaseDTO {
  imageUrl: string;
  apartment: ApartmentDTO;
}
