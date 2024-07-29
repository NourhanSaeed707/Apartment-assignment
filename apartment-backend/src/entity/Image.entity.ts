import { Column, Entity, ManyToOne } from 'typeorm';
import { Apartment } from './apartment.entity';
import { BaseEntity } from './BaseEntity.entity';

@Entity()
export class Image extends BaseEntity {
  @Column()
  imageUrl: string;

  @ManyToOne((type) => Apartment, (apartment) => apartment.images)
  apartment: Apartment;
}
