import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking, BookingDocument } from './bookings.schema';

@Injectable()
export class BookingsService {
  constructor(@InjectModel(Booking.name) private bookingModel: Model<BookingDocument>) {}

  async create(bookingDto): Promise<Booking> {
    return await this.bookingModel.create(bookingDto);
  }

  async getAll(): Promise<Booking[]> {
    return await this.bookingModel.find().exec();
  }

  async delete(id: string) {
    return await this.bookingModel.findByIdAndDelete(id);
  }
}
