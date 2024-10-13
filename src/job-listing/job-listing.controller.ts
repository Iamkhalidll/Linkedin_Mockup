import { Controller, Post, Body, Get } from '@nestjs/common';
import { JobListingService } from './job-listing.service';

@Controller('jobs')
export class JobListingController {
  constructor(private readonly jobListingService: JobListingService) {}

  // Endpoint to create a job listing
  @Post()
  async createJob(@Body() body: { title: string; description: string; company: string; location: string }) {
    return this.jobListingService.createJobListing(body.title, body.description, body.company, body.location);
  }

  // Endpoint to retrieve all job listings
  @Get()
  async getJobs() {
    return this.jobListingService.getJobListings();
  }
}
