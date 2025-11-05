
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { SermonsService } from './sermons.service';
import { CreateSermonDto } from './dto/create-sermon.dto';
import { UpdateSermonDto } from './dto/update-sermon.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('sermons')
export class SermonsController {
  constructor(private readonly sermonsService: SermonsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createSermonDto: CreateSermonDto) {
    return this.sermonsService.create(createSermonDto);
  }

  @Get()
  findAll() {
    return this.sermonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.sermonsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateSermonDto: UpdateSermonDto) {
    return this.sermonsService.update(id, updateSermonDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.sermonsService.remove(id);
  }
}
