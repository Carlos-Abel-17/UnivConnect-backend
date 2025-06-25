import { Module } from '@nestjs/common';
import { AuthModule } from './infrastructure/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './infrastructure/database/typeorm.config';
import { UsersModule } from './modules/users/users.module';
import { DistrictModule } from './modules/district/district.module';
import { ProvinceModule } from './modules/province/province.module';
import { DepartamentModule } from './modules/departament/departament.module';
import { EmailinstiModule } from './modules/emailinsti/emailinsti.module';

@Module({
  imports: [AuthModule,
    TypeOrmModule.forRoot(TypeOrmConfig),
    UsersModule,DistrictModule,
    ProvinceModule,DepartamentModule,
    EmailinstiModule 
  ],
})
export class AppModule {}
