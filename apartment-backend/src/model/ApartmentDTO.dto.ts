import { ApartmentStatus } from 'src/entity/enum/ApartmentStatus';
import { ClientDTO } from './ClientDTO.dto';
import { ImageDTO } from './ImageDTO.dto';
import { ApartmentTypeDTO } from './ApartmentTypeDTO.dto';
import { BaseDTO } from './BaseDTO.dto';

export class ApartmentDTO extends BaseDTO {
  serial: string;
  apartmentNumber: string;
  building: string;
  floor: number;
  numOfBedrooms: number;
  numOfBathrooms: number;
  pricePerMeter: number;
  basicPrice: number;
  fullyPrice: number;
  gardenPrice: number;
  status: ApartmentStatus;
  deliveryDate: Date;
  apartmentType: ApartmentTypeDTO;
  client: ClientDTO;
  images: ImageDTO[];
}
