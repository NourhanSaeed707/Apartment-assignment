import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ApartmentStatus } from './enum/ApartmentStatus';
import { ApartmentType } from './ApartmentType.entity';
import { Client } from './Client.entity';
import { Image } from './Image.entity';
import { BaseEntity } from './BaseEntity.entity';

@Entity()
export class Apartment extends BaseEntity {
  @Column()
  serial: string;

  @Column()
  apartmentNumber: string;

  @Column()
  building: string;

  @Column()
  floor: number;

  @Column()
  numOfBedrooms: number;

  @Column()
  numOfBathrooms: number;

  @Column()
  pricePerMeter: number;

  @Column()
  basicPrice: number;

  @Column()
  fullyPrice: number;

  @Column()
  gardenPrice: number;

  @Column()
  status: ApartmentStatus;

  @Column()
  deliveryDate: Date;

  @ManyToOne((type) => ApartmentType)
  apartmentType: ApartmentType;

  @ManyToOne((type) => Client, (client) => client.apartments)
  client: Client;

  @OneToMany((type) => Image, (image) => image.apartment)
  images: Image[];
}
