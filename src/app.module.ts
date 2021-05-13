import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { environments } from './environments';
import config from './config';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildersModule } from './modules/builders/builders.module';
import { ParticipantsModule } from './modules/participants/participants.module';
import { CitiesModule } from './modules/cities/cities.module';

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
        MYSQL_PASSWORD: Joi.string().required().allow(null, ''),
        MYSQL_PORT: Joi.number().required(),
        MYSQL_HOST: Joi.string().required(),
        TYPEORM_CONNECTION: Joi.string().required(),
        TYPEORM_HOST: Joi.string().required(),
        TYPEORM_USERNAME: Joi.string().required(),
        TYPEORM_PASSWORD: Joi.string().required().allow(null, ''),
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
    DatabaseModule,
    BuildersModule,
    ParticipantsModule,
    CitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
