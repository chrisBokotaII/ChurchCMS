
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pastor } from './entities/pastor.entity';
import { CreatePastorDto } from './dto/create-pastor.dto';
import { UpdatePastorDto } from './dto/update-pastor.dto';

@Injectable()
export class PastorsService {
  constructor(
    @InjectRepository(Pastor)
    private pastorsRepository: Repository<Pastor>,
  ) {}

  create(createPastorDto: CreatePastorDto): Promise<Pastor> {
    const pastor = this.pastorsRepository.create(createPastorDto);
    return this.pastorsRepository.save(pastor);
  }

  findAll(): Promise<Pastor[]> {
    return this.pastorsRepository.find();
  }

  async findOne(id: number): Promise<Pastor> {
    const pastor = await this.pastorsRepository.findOneBy({ id });
    if (!pastor) {
      throw new NotFoundException(`Pastor with ID "${id}" not found`);
    }
    return pastor;
  }

  async update(id: number, updatePastorDto: UpdatePastorDto): Promise<Pastor> {
    const pastor = await this.pastorsRepository.preload({
      id: id,
      ...updatePastorDto,
    });
    if (!pastor) {
      throw new NotFoundException(`Pastor with ID "${id}" not found`);
    }
    return this.pastorsRepository.save(pastor);
  }

  async remove(id: number): Promise<void> {
    const result = await this.pastorsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Pastor with ID "${id}" not found`);
    }
  }
}
