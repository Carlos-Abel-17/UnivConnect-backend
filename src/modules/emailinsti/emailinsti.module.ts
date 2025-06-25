import { Module } from '@nestjs/common';
import { EmailinstiController } from './emailinsti.controller';
import { EmailinstiService } from './emailinsti.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailInstiEntities } from 'src/core/entities/emailinsti.entity';

@Module({
  imports:[TypeOrmModule.forFeature([EmailInstiEntities])],
  controllers: [EmailinstiController],
  providers: [EmailinstiService]
})
export class EmailinstiModule {}
