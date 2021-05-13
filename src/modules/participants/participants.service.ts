import { Injectable, Inject, NotFoundException } from '@nestjs/common';

import { Connection, QueryError, RowDataPacket, OkPacket } from 'mysql2';

@Injectable()
export class ParticipantsService {
  private tableName = 'participants';
  constructor(@Inject('MySQL') private connection: Connection) {}

  async findAll() {
    const participants = new Promise<RowDataPacket[]>((resolve, reject) => {
      this.connection.query(
        `SELECT * FROM ${this.tableName}`,
        (err: QueryError, rows: RowDataPacket[]) => {
          if (err) reject(err);
          resolve(rows);
        },
      );
    });
    if ((await participants).length === 0) {
      throw new NotFoundException(`table ${this.tableName} is empty`);
    }
    return participants;
  }

  async findOne(id: number) {
    const participant = new Promise<RowDataPacket[]>((resolve, reject) => {
      this.connection.query(
        `SELECT * FROM ${this.tableName} WHERE id=${id}`,
        (err: QueryError, rows: RowDataPacket[]) => {
          if (err) reject(err);
          resolve(rows);
        },
      );
    });
    if ((await participant).length === 0) {
      throw new NotFoundException(`participant with id ${id} not found`);
    }
    return participant;
  }
}
