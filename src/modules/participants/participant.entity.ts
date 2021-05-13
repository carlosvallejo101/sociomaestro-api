import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'participants',
})
export class ParticipantEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  program_id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  last_name: string;
}
