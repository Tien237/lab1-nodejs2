import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookingDocument = Booking & Document;

@Schema()
export class Booking {
  @Prop()
  userId: string;

  @Prop()
  venueId: string;

  @Prop()
  date: string;

  @Prop()
  time: string;

  @Prop()
  status: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
