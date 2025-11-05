
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'date' })
  date: string;

  @Column()
  time: string;

  @Column()
  location: string;

  @Column()
  imageUrl: string;

  @Column('text')
  description: string;

  @Column()
  category: 'Community' | 'Youth' | 'Worship' | 'Outreach';

  @Column({ nullable: true })
  registrationUrl?: string;

  @Column({ nullable: true })
  calendarLink?: string;
}
