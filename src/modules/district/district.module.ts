import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictController } from './district.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistrictEntities } from 'src/core/entities/district.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DistrictEntities])],
  providers: [DistrictService],
  controllers: [DistrictController]
})
export class DistrictModule {}
