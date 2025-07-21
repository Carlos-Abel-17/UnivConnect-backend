import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserEntities } from 'src/core/entities/create-user.entity';
import { ResponseData } from 'src/shared/helpers/Response.helpers';

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService:UsersService){}

    @Get(':id')
    async findOne(@Param('id') id :string ):Promise<CreateUserEntities>{
        //console.log(id)
        const user = await this.UsersService.FindOne(+id);
        if(!user){
             ResponseData('Ha ocurrido un error en la peticion', user);
        }
        return user;
    }

    @Post('verifyNameUser')
    async verifyNameUser(@Body() Name_User:string){
        const ResVerifyNameUser = await this.UsersService.VerifyNameUser(Name_User);
        return ResVerifyNameUser;
    }

    @Post('createUsers')
    async createUser(@Body() dataUser:any){
        //console.log(dataUser.user);
        const ResCreateUser = await this.UsersService.CreateUser(dataUser.user);
        return ResCreateUser;
    } 

}
