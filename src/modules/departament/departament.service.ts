import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartamentEntities } from 'src/core/entities/departament.entity';
import { ResponseData } from 'src/shared/helpers/Response.helpers';
import { Repository } from 'typeorm';

@Injectable()
export class DepartamentService {
    constructor(
        @InjectRepository(DepartamentEntities)
        private readonly DepartRepository:Repository<DepartamentEntities>
    ){}

    async findAll():Promise<DepartamentEntities[]>{
       return await this.DepartRepository.find();


    }
}
