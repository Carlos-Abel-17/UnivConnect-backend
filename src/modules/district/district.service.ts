import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DistrictEntities } from 'src/core/entities/district.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DistrictService {
    constructor(
        @InjectRepository(DistrictEntities)
        private  DistrictRepository : Repository<DistrictEntities>
    ){}

    async FindDistrict(id:string):Promise<DistrictEntities[]>{
        const District = await this.DistrictRepository.find({where:{provinceId:id}})
        return District;
    } 
}
