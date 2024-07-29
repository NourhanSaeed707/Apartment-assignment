import { Injectable } from '@nestjs/common';
import { Apartment } from 'src/entity/apartment.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UsersRepository extends Repository<Apartment> {
  constructor(private dataSource: DataSource) {
    super(Apartment, dataSource.createEntityManager());
  }
}
