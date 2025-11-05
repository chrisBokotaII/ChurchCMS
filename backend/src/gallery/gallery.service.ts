
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GalleryImage } from './entities/gallery-image.entity';
import { CreateGalleryImageDto } from './dto/create-gallery-image.dto';
import { UpdateGalleryImageDto } from './dto/update-gallery-image.dto';

@Injectable()
export class GalleryService {
  constructor(
    @InjectRepository(GalleryImage)
    private galleryRepository: Repository<GalleryImage>,
  ) {}

  create(createGalleryImageDto: CreateGalleryImageDto): Promise<GalleryImage> {
    const image = this.galleryRepository.create(createGalleryImageDto);
    return this.galleryRepository.save(image);
  }

  findAll(): Promise<GalleryImage[]> {
    return this.galleryRepository.find();
  }

  async findOne(id: number): Promise<GalleryImage> {
    const image = await this.galleryRepository.findOneBy({ id });
    if (!image) {
      throw new NotFoundException(`Gallery image with ID "${id}" not found`);
    }
    return image;
  }

  async update(id: number, updateGalleryImageDto: UpdateGalleryImageDto): Promise<GalleryImage> {
    const image = await this.galleryRepository.preload({
      id: id,
      ...updateGalleryImageDto,
    });
    if (!image) {
      throw new NotFoundException(`Gallery image with ID "${id}" not found`);
    }
    return this.galleryRepository.save(image);
  }

  async remove(id: number): Promise<void> {
    const result = await this.galleryRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Gallery image with ID "${id}" not found`);
    }
  }
}
