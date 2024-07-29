import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApartmentController } from 'src/controller/Apartment.controller';
import { Apartment } from 'src/entity/apartment.entity';
import { ApartmentService } from 'src/service/apartment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Apartment])],
  controllers: [ApartmentController],
  providers: [ApartmentService],
})
export class ApartmentModule {}
