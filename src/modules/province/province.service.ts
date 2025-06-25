import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProvinceEntities } from 'src/core/entities/province.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProvinceService {
    constructor(@InjectRepository(ProvinceEntities)
        private provinceRepository: Repository<ProvinceEntities>
    ){}

    async FindOne(id:number):Promise<ProvinceEntities[]>{
         return await this.provinceRepository.find({where:{departamentId:id}})
        
    }
}
