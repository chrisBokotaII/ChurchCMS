
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PastorsService } from './pastors.service';
import { PastorsController } from './pastors.controller';
import { Pastor } from './entities/pastor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pastor])],
  controllers: [PastorsController],
  providers: [PastorsService],
})
export class PastorsModule {}
