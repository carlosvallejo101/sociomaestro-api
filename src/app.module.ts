import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { environments } from './environments';
import config from './config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        PORT: Joi.number().optional(),
        MYSQL_DATABASE: Joi.string().required(),
        MYSQL_USER: Joi.string().required(),
        MYSQL_PASSWORD: Joi.string().required(),
        MYSQL_PORT: Joi.number().required(),
        MYSQL_HOST: Joi.string().required(),
        TYPEORM_CONNECTION: Joi.string().required(),
        TYPEORM_HOST: Joi.string().required(),
        TYPEORM_USERNAME: Joi.string().required(),
        TYPEORM_PASSWORD: Joi.string().required(),
        TYPEORM_DATABASE: Joi.string().required(),
        TYPEORM_PORT: Joi.number().required(),
        TYPEORM_SYNCHRONIZE: Joi.boolean().required(),
        TYPEORM_LOGGING: Joi.boolean().required(),
        TYPEORM_ENTITIES: Joi.string().required(),
        TYPEORM_MIGRATIONS_DIR: Joi.string().required(),
        TYPEORM_MIGRATIONS_TABLE_NAME: Joi.string().required(),
        TYPEORM_MIGRATIONS: Joi.string().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
