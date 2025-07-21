import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Type } from 'class-transformer';

@Entity('Users')
export class CreateUserEntities{
 @PrimaryGeneratedColumn()
    IdUser:number;

 @Column({length:80})
    Name:string;

 @Column({length:80})
    LastName:string;

 @Column()
    Birthdate:Date;

 @Column()
    Name_User:string;

 @Column('int2')
     Gender:number;

 @Column('int')
    Number:number;

 @Column()
     Email:string;

 @Column()
    Password:string;

 @Column({nullable:true})
   PasswordView:string;

 @Column({type:'integer' })
    Departament:number;
  
 @Column({type:'integer' })
    Province:number;
  
 @Column({type:'integer' })
  District:number;

  @Column({type:'integer'})
  idInstitucion:number;
};