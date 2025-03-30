import { Controller, Post, Get, Patch, Delete, Body, Param, UseGuards, Req } from '@nestjs/common';
import { VenuesService } from './venues.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('venues')
export class VenuesController {
  constructor(private readonly venuesService: VenuesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() venueDto, @Req() req) {
    return req.user.role === 'admin' ? this.venuesService.create(venueDto) : { message: 'Unauthorized' };
  }

  @Get()
  async findAll() {
    return this.venuesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() venueDto, @Req() req) {
    return req.user.role === 'admin' ? this.venuesService.update(id, venueDto) : { message: 'Unauthorized' };
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Req() req) {
    return req.user.role === 'admin' ? this.venuesService.delete(id) : { message: 'Unauthorized' };
  }
}
