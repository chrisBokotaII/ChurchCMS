
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('gallery_images')
export class GalleryImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imageUrl: string;

  @Column()
  thumbnailUrl: string;

  @Column()
  alt: string;

  @Column()
  album: string;
}
