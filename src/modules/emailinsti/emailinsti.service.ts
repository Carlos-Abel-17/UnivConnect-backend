import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmailInstiEntities } from 'src/core/entities/emailinsti.entity';
import { ResponseDataError } from 'src/shared/helpers/Response.helpers';
import { Repository } from 'typeorm';
import  * as dotenv from 'dotenv'; 
import {Resend} from 'resend'
import { EmailVerificationEntities } from 'src/core/entities/email_verification.entity';

 dotenv.config();

@Injectable()
export class EmailinstiService {
    private resend = new Resend(process.env.API_KEY_RESEND);
    constructor(
        @InjectRepository(EmailInstiEntities)
        private EmailInstiRepository : Repository<EmailInstiEntities>,
        @InjectRepository(EmailVerificationEntities)
        private EmailVerificationRepo : Repository<EmailVerificationEntities>
    ){};

    async ValidateEmail(email:string):Promise<{ success: boolean; message: string; data:object } | null>{
        //console.log('recibo',email)
        const dominio = email.split('@')[1];
        //console.log(`@${dominio}`)
        const ValidateDominio = await this.EmailInstiRepository.findOne({where:{email:`@${dominio}`}});
        //console.log('validate dominio',ValidateDominio)
        if(!ValidateDominio){
            return {
                success:false,
                message:'ocurrio un error',
                data:ValidateDominio
            }; 
        }

        const code = Math.floor(100000 + Math.random() * 900000).toString();
        const {data, error} = await this.SendEmailCode(email, code);

        //console.log(data, error);

        if(!error){
            await this.EmailVerificationRepo.save({email, code})
        }else{
            return{
                success: false,
                message: `Error al enviar el correo verifique el dominio ${ValidateDominio.institucion}`,
                data:data
            }
        }

        const DataResponse = {
            ...data,
            dataInsti:ValidateDominio 
        }
        return {
        success: true,
        message: `Código enviado correctamente`,
        data:DataResponse
    };
    }

    async SendEmailCode(toEmail:string, code:string){
        //console.log(toEmail,' ', code)
        const response = await this.resend.emails.send({
            from: 'onboarding@resend.dev',
            to: toEmail,
            subject: 'Código de Verificación',
            html: `
            <h1>UnivConnect</h1>
            <h3>Tu código de verificación es:</h3><p><b>${code}</b></p>`,
        }) 
        return response;
    }

    async VerifyCode(email:string, code:string):Promise<{success:boolean; message: string}>{
        const record = await this.EmailVerificationRepo.findOne({where:{email,code}});
        
        if(!record){
                return { success: false, message: 'Código incorrecto o expirado' };
        }

        await this.EmailVerificationRepo.remove(record);

        return { success: true, message: 'Correo verificado correctamente' };
    }
}
