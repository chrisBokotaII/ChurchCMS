
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { PastorsService } from './pastors.service';
import { CreatePastorDto } from './dto/create-pastor.dto';
import { UpdatePastorDto } from './dto/update-pastor.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('pastors')
export class PastorsController {
  constructor(private readonly pastorsService: PastorsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createPastorDto: CreatePastorDto) {
    return this.pastorsService.create(createPastorDto);
  }

  @Get()
  findAll() {
    return this.pastorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pastorsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePastorDto: UpdatePastorDto) {
    return this.pastorsService.update(id, updatePastorDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pastorsService.remove(id);
  }
}
