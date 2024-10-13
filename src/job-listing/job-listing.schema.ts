import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class JobListing extends Document {
  @Prop({ required: true })
  title: string; // Job title

  @Prop({ required: true })
  description: string; // Job description

  @Prop({ required: true })
  company: string; // Company name

  @Prop({ required: true })
  location: string; // Job location

  @Prop({ default: new Date() })
  postedAt: Date; // Date when the job was posted
}

export const JobListingSchema = SchemaFactory.createForClass(JobListing);
