import { Column, Entity, OneToMany } from 'typeorm';
import { Apartment } from './apartment.entity';
import { BaseEntity } from './BaseEntity.entity';

@Entity()
export class ApartmentType extends BaseEntity {
  @Column()
  name: string;

  @OneToMany((type) => Apartment, (apartment) => apartment.apartmentType)
  apartments: Apartment[];
}
