import { Module } from '@nestjs/common';
import { ProvinceController } from './province.controller';
import { ProvinceService } from './province.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinceEntities } from 'src/core/entities/province.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProvinceEntities])],
  controllers: [ProvinceController],
  providers: [ProvinceService]
})
export class ProvinceModule {}
