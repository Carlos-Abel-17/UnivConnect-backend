import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Departament')
export class DepartamentEntities{
    @PrimaryColumn({type:'numeric', precision:8})
    id:number;

    @Column({name:'name_depar', type:'text'})
    nameDepar:string;
}