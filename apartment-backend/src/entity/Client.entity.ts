import { Column, Entity, OneToMany } from 'typeorm';
import { Apartment } from './apartment.entity';
import { BaseEntity } from './BaseEntity.entity';

@Entity()
export class Client extends BaseEntity {
  @Column()
  fisrtName: string;

  @Column()
  lasttName: string;

  @Column()
  email: string;

  @Column()
  mobile: string;

  @Column()
  country: string;

  @OneToMany((type) => Apartment, (apartment) => apartment.client)
  apartments: Apartment[];
}
