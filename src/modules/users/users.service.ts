import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import { CreateUserEntities } from 'src/core/entities/create-user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(CreateUserEntities)
        private UserRepository: Repository<CreateUserEntities>
    ){}

    async FindOne(id:number):Promise<CreateUserEntities | null> {
        
         const User = this.UserRepository.findOne({where:{IdUser:id},select:{Name:true,LastName:true,Gender:true,Number:true,Email:true,Departament:true,Province:true,District:true}});
         return User;
    }
}
