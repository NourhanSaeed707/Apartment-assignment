import { Apartment } from 'src/entity/apartment.entity';
import { ApartmentDTO } from 'src/model/ApartmentDTO.dto';

export class ApartmentMapper {
  static fromDTOtoEntity(entityDTO: ApartmentDTO): Apartment {
    if (!entityDTO) {
      return;
    }
    const entity = new Apartment();
    const fields = Object.getOwnPropertyNames(entityDTO);
    fields.forEach((field) => {
      entity[field] = entityDTO[field];
    });
    return entity;
  }

  static fromEntityToDTO(entity: Apartment): ApartmentDTO {
    if (!entity) {
      return;
    }
    const entityDTO = new ApartmentDTO();
    const fields = Object.getOwnPropertyNames(entity);
    fields.forEach((field) => {
      entityDTO[field] = entity[field];
    });
    return entityDTO;
  }
}
