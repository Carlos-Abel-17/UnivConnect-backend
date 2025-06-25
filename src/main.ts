import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv'
//import open from 'open';


dotenv.config();

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('API UniConnect')
  .setDescription('Documentación de la API de Uniconnect')
  .setVersion('5.0')
  .addBearerAuth()
  .build(); 

  app.enableCors({
  origin:'http://localhost:5173',
  Credential:true
  });

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs',app,document);

  await app.listen(process.env.PORT ?? 3000);

  //await open(`http://localhost:${process.env.PORT ?? 3000}/api/docs`,{app:{name:'chrome'}} )
}
bootstrap();
