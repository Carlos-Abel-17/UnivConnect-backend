import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('District')
export class DistrictEntities{
    @PrimaryColumn({name:'id', type:'text'})
    id:string;

    @Column({name:'name', type:'text'})
    name:string;

    @Column({name:'province_id', type:'text'})
    provinceId:string;

    @Column({name:'departament_id', type:'numeric', precision:4})
    departamentId:number;

}