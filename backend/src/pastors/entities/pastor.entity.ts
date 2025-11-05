
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pastors')
export class Pastor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  imageUrl: string;

  @Column('text')
  bio: string;
}
