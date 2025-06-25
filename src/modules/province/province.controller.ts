import { Controller, Get, Param } from '@nestjs/common';
import { ProvinceEntities } from 'src/core/entities/province.entity';
import { ProvinceService } from './province.service';

@Controller('province')
export class ProvinceController {
    constructor(
        private readonly ProvinceService:ProvinceService
    ){}

    @Get(':id')
    async FindProvince(@Param('id') id:string):Promise<ProvinceEntities[]>{
        console.log(id)
        const province = await this.ProvinceService.FindOne(+id)
        return province;
    }
}
