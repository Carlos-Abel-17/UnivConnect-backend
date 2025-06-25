import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Province')
export class ProvinceEntities{
    @PrimaryColumn({name:'id', type:'text'})
    id:string;

    @Column({name:'name', type:'text'})
    name:string;

    @Column({name:'departament_id', type:'numeric', precision:8})
    departamentId:number;
}