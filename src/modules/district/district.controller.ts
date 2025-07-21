import { Controller, Get, Param } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictEntities } from 'src/core/entities/district.entity';

@Controller('district')
export class DistrictController {
    constructor(
        private readonly DistrictService:DistrictService
    ){}

    @Get(':id')
    async GetProvince(@Param('id') id:string):Promise<DistrictEntities[]>{
        //console.log(id);
        return  await this.DistrictService.FindDistrict(id);
        
    }
}
