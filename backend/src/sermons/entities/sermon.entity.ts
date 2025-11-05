
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('sermons')
export class Sermon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  speaker: string;

  @Column()
  series: string;

  @Column({ type: 'date' })
  date: string;

  @Column()
  videoUrl: string;

  @Column()
  audioUrl: string;

  @Column()
  thumbnailUrl: string;

  @Column('text')
  description: string;
}
