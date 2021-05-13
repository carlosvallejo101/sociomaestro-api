import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../config';

// const mysql = require('mysql2/promise');
const mysql = require('mysql2');
// import mysql from 'mysql2';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
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
          autoLoadEntities: true,
          timezone: '-05:00',
        };
      },
    }),
  ],
  providers: [
    {
      provide: 'MySQL',
      useFactory: (configService: ConfigType<typeof config>) => {
        const {
          host,
          name: database,
          password,
          port,
          user,
        } = configService.database.mysql;
        const connection = mysql.createConnection({
          host,
          user,
          password,
          database,
          port,
        });
        // connection.connect((err) => {
        //   console.log('err', err);
        // });
        return connection;
      },
      inject: [config.KEY],
    },
  ],
  exports: [TypeOrmModule, 'MySQL'],
})
export class DatabaseModule {}
