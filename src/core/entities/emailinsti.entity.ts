import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('emailinsti')
export class EmailInstiEntities{
    @PrimaryColumn({type:'numeric'})
    idInstitucion:number;

    @Column({type:'text'})
    email:string;

    @Column({type:'text'})
    institucion:string;
}