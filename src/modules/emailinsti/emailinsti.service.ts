import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmailInstiEntities } from 'src/core/entities/emailinsti.entity';
import { ResponseDataError } from 'src/shared/helpers/Response.helpers';
import { Repository } from 'typeorm';
import  * as dotenv from 'dotenv'; 
import {Resend} from 'resend'

 dotenv.config();

@Injectable()
export class EmailinstiService {
    private resend = new Resend(process.env.API_KEY_RESEND);
    constructor(
        @InjectRepository(EmailInstiEntities)
        private EmailInstiRepository : Repository<EmailInstiEntities>
    ){};

    async ValidateEmail(email:string):Promise<{ success: boolean; message: string; data:object } | null>{
        console.log('recibo',email)
        const dominio = email.split('@')[1];
        console.log(`@${dominio}`)
        const ValidateDominio = await this.EmailInstiRepository.findOne({where:{email:`@${dominio}`}});

        if(!ValidateDominio){
            return {
                success:false,
                message:'ocurrio un error',
                data:ValidateDominio
            }; 
        }

        const code = Math.floor(100000 + Math.random() * 900000).toString();
        const DataCodeEmail = await this.SendEmailCode(email, code);
        console.log(DataCodeEmail)
        return {
        success: true,
        message: 'Código enviado correctamente.',
        data:DataCodeEmail
    };
    }

    async SendEmailCode(toEmail:string, code:string){
        console.log(toEmail,' ', code)
        const response = await this.resend.emails.send({
            from: 'onboarding@resend.dev',
            to: toEmail,
            subject: 'Código de Verificación',
            html: `<h3>Tu código de verificación es:</h3><p><b>${code}</b></p>`,
        }) 
        return response;
    }
}
