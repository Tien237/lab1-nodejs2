import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VenueDocument = Venue & Document;

@Schema()
export class Venue {
  @Prop()
  name: string;

  @Prop()
  capacity: number;
}

export const VenueSchema = SchemaFactory.createForClass(Venue);
