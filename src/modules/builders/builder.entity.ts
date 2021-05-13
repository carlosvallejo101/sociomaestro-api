import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'builder',
})
export class BuilderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  participantId: number;

  @Column({ type: 'varchar', length: '13' })
  identification: string;

  @Column({ type: 'varchar', length: '100' })
  names: string;

  @Column({ type: 'varchar', length: '100' })
  lastNames: string;

  @Column({ type: 'varchar', length: '10' })
  phoneNumber: string;

  @Column({ type: 'varchar', length: '100' })
  email: string;

  @Column({ type: 'int', nullable: false })
  citieId: number;
}
