import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

 @Column('int2',{ nullable: true })
    Departament:number;
  
 @Column('int2',{ nullable: true })
    Province:number;
  
 @Column('int2',{ nullable: true })
  District:number;

};