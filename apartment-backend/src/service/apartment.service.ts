import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Apartment } from 'src/entity/apartment.entity';
import { ApartmentDTO } from 'src/model/ApartmentDTO.dto';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { ApartmentMapper } from './mapper/Apartment.mapper';

@Injectable()
export class ApartmentService {
  constructor(
    @InjectRepository(Apartment)
    private readonly apartmentRepository: Repository<Apartment>,
  ) {}

  async findAndCount(
    options: FindManyOptions<ApartmentDTO>,
  ): Promise<[ApartmentDTO[], number]> {
    const relationsNames = ['apartmentType', 'client', 'images'];
    options.relations = relationsNames;
    const resultList = await this.apartmentRepository.findAndCount(options);
    const apartmentDTO: ApartmentDTO[] = [];
    if (resultList && resultList[0]) {
      resultList[0].forEach((apartment) =>
        apartmentDTO.push(ApartmentMapper.fromEntityToDTO(apartment)),
      );
      resultList[0] = apartmentDTO;
    }
    return resultList;
  }

  async findByFields(
    options: FindOneOptions<ApartmentDTO>,
  ): Promise<Apartment | undefined> {
    const result = await this.apartmentRepository.findOne(options);
    return ApartmentMapper.fromEntityToDTO(result);
  }

  async fingById(id: number): Promise<ApartmentDTO | undefined> {
    const relationsNames = ['apartmentType', 'client', 'images'];
    const entity = await this.apartmentRepository.findOne({
      where: {
        id,
      },
      relations: relationsNames,
    });
    return entity ? ApartmentMapper.fromEntityToDTO(entity) : undefined;
  }

  async save(apartmentDTO: ApartmentDTO): Promise<ApartmentDTO | undefined> {
    const entity = ApartmentMapper.fromDTOtoEntity(apartmentDTO);
    const result = await this.apartmentRepository.save(entity);
    return ApartmentMapper.fromEntityToDTO(result);
  }

  async update(apartmentDTO: ApartmentDTO): Promise<ApartmentDTO | undefined> {
    const entity = ApartmentMapper.fromDTOtoEntity(apartmentDTO);
    const result = await this.apartmentRepository.save(entity);
    return ApartmentMapper.fromEntityToDTO(result);
  }

  async deleteById(id: number): Promise<void | undefined> {
    await this.apartmentRepository.delete(id);
    const entityFound = await this.fingById(id);
    if (entityFound) {
      throw new HttpException(
        'Error entity not deleted!',
        HttpStatus.NOT_FOUND,
      );
    }
    return;
  }
}
