import { ApiResponse } from '@nestjs/swagger';
import { ApartmentService } from './../service/apartment.service';
import {
  Controller,
  Get,
  Req,
  Post as PostMethod,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ApartmentDTO } from 'src/model/ApartmentDTO.dto';

@Controller('api/apartments')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Get('/get-all')
  @ApiResponse({
    status: 200,
    description: 'List all apartments',
    type: ApartmentDTO,
  })
  async getAll(@Req() req: Request): Promise<[ApartmentDTO[], number]> {
    return await this.apartmentService.findAndCount({});
  }

  @PostMethod('/save')
  @ApiResponse({
    status: 200,
    description: 'create apartment',
    type: ApartmentDTO,
  })
  async post(
    @Req() req: Request,
    @Body() apartmentDTO: ApartmentDTO,
  ): Promise<ApartmentDTO> {
    return this.apartmentService.save(apartmentDTO);
  }

  @Put('/update/:id')
  @ApiResponse({
    status: 200,
    description: 'create apartment',
    type: ApartmentDTO,
  })
  async putId(
    @Req() req: Request,
    @Body() apartmentDTO: ApartmentDTO,
  ): Promise<ApartmentDTO> {
    return await this.apartmentService.update(apartmentDTO);
  }

  @Get('/get-one/:id')
  @ApiResponse({
    status: 200,
    description: 'create one apartment by id',
    type: ApartmentDTO,
  })
  async getOne(
    @Param('id') id: number,
    @Req() req: Request,
  ): Promise<ApartmentDTO> {
    return await this.apartmentService.fingById(id);
  }

  @Delete('/delete/:id')
  async DeleteQueryBuilder(
    @Param('id') id: number,
    @Req() req: Request,
  ): Promise<void> {
    await this.apartmentService.deleteById(id);
  }
}
