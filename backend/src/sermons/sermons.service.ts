
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sermon } from './entities/sermon.entity';
import { CreateSermonDto } from './dto/create-sermon.dto';
import { UpdateSermonDto } from './dto/update-sermon.dto';

@Injectable()
export class SermonsService {
  constructor(
    @InjectRepository(Sermon)
    private sermonsRepository: Repository<Sermon>,
  ) {}

  create(createSermonDto: CreateSermonDto): Promise<Sermon> {
    const sermon = this.sermonsRepository.create(createSermonDto);
    return this.sermonsRepository.save(sermon);
  }

  findAll(): Promise<Sermon[]> {
    return this.sermonsRepository.find({
      order: {
        date: 'DESC'
      }
    });
  }

  async findOne(id: number): Promise<Sermon> {
    const sermon = await this.sermonsRepository.findOneBy({ id });
    if (!sermon) {
      throw new NotFoundException(`Sermon with ID "${id}" not found`);
    }
    return sermon;
  }

  async update(id: number, updateSermonDto: UpdateSermonDto): Promise<Sermon> {
    const sermon = await this.sermonsRepository.preload({
      id: id,
      ...updateSermonDto,
    });
    if (!sermon) {
      throw new NotFoundException(`Sermon with ID "${id}" not found`);
    }
    return this.sermonsRepository.save(sermon);
  }

  async remove(id: number): Promise<void> {
    const result = await this.sermonsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Sermon with ID "${id}" not found`);
    }
  }
}
