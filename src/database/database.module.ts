import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigType<typeof config>) => {
        const {
          host,
          name: database,
          password,
          port,
          user: username,
        } = configService.database.mysql;
        return {
          type: 'mysql',
          host,
          port,
          database,
          username,
          password,
          synchronize: false,
          timezone: '-05:00',
        };
      },
    }),
  ],
})
export class DatabaseModule {}
