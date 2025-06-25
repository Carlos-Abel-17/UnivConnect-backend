import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { EmailinstiService } from './emailinsti.service';
import { EmailInstiEntities } from 'src/core/entities/emailinsti.entity';
import { emailVlidate } from './dto/emailVlidate.dto';

@Controller('emailinsti')
export class EmailinstiController {
    constructor(
        private readonly EmailinstiService:EmailinstiService
    ){}

    @Post('validate')
    async ValidateEmail(@Body() Body:emailVlidate):Promise<{ success: boolean; message: string; data:object } | null>{
        console.log(Body)
        return await this.EmailinstiService.ValidateEmail(Body.email);
    }
}
