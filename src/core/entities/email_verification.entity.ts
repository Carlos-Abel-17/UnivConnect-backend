import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('email_verification')
export class EmailVerificationEntities{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    email:string;

    @Column()
    code:string;

    @CreateDateColumn({type:'timestamp'})
    createdAt:Date;


}