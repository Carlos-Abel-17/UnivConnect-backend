import { Module } from '@nestjs/common';
import { DepartamentController } from './departament.controller';
import { DepartamentService } from './departament.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartamentEntities } from 'src/core/entities/departament.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DepartamentEntities])],
  controllers: [DepartamentController],
  providers: [DepartamentService]
})
export class DepartamentModule {}
