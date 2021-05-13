import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Connection, QueryError, RowDataPacket } from 'mysql2';

@Injectable()
export class CitiesService {
  private tableName = 'cities';
  constructor(@Inject('MySQL') private connection: Connection) {}

  async findAll() {
    const cities = new Promise<RowDataPacket[]>((resolve, reject) => {
      this.connection.query(
        `SELECT * FROM ${this.tableName}`,
        (err: QueryError, rows: RowDataPacket[]) => {
          if (err) reject(err);
          resolve(rows);
        },
      );
    });
    if ((await cities).length === 0) {
      throw new NotFoundException(`table ${this.tableName} is empty`);
    }
    return cities;
  }

  async findOne(id: number) {
    const citie = new Promise<RowDataPacket[]>((resolve, reject) => {
      this.connection.query(
        `SELECT * FROM ${this.tableName} WHERE id=${id}`,
        (err: QueryError, rows: RowDataPacket[]) => {
          if (err) reject(err);
          resolve(rows);
        },
      );
    });
    if ((await citie).length === 0) {
      throw new NotFoundException(`citie with id ${id} not found`);
    }
    return citie;
  }
}
