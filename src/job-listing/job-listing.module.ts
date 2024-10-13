import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobListingController } from './job-listing.controller';
import { JobListingService } from './job-listing.service';
import { JobListing, JobListingSchema } from './job-listing.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: JobListing.name, schema: JobListingSchema }]),
  ],
  controllers: [JobListingController],
  providers: [JobListingService],
})
export class JobListingModule {}
