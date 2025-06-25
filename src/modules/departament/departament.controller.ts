import { Controller, Get } from '@nestjs/common';
import { DepartamentService } from './departament.service';
import { DepartamentEntities } from 'src/core/entities/departament.entity';
import { ResponseData } from 'src/shared/helpers/Response.helpers';

@Controller('departament')
export class DepartamentController {

    constructor(
        private readonly DepartService: DepartamentService
    ){}

    @Get()
    GetAll():Promise<DepartamentEntities[]>{
        const DataDepart = this.DepartService.findAll()
        return DataDepart;

    }
}
