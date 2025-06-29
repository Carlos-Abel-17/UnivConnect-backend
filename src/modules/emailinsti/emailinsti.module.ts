import { Module } from '@nestjs/common';
import { EmailinstiController } from './emailinsti.controller';
import { EmailinstiService } from './emailinsti.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailInstiEntities } from 'src/core/entities/emailinsti.entity';
import { EmailVerificationEntities } from 'src/core/entities/email_verification.entity';

@Module({
  imports:[TypeOrmModule.forFeature([EmailVerificationEntities,EmailInstiEntities])],
  controllers: [EmailinstiController],
  providers: [EmailinstiService]
})
export class EmailinstiModule {}
