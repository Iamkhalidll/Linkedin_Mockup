import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';
import { JobListingModule } from './job-listing/job-listing.module';
import * as dotenv from 'dotenv';
dotenv.config();
const mongoURI = process.env.MONGO_DB_URL ;


const mongooseConnectionFactory = (connection) => {
  connection.on('connected', () => {
     console.log('Connected to MongoDB successfully!');
  });
  connection.on('disconnected', () => {
     console.log('DB disconnected');
  });
  connection.on('error', (error) => {
     console.log('DB connection failed! for error: ', error);
  });
  connection._events.connected();
  return connection;
  }

@Module({
  imports: [
  MongooseModule.forRoot(mongoURI, {  
     connectionFactory: mongooseConnectionFactory,
     autoIndex: true}), // MongoDB connection URL
    AuthModule,
    UserModule,
    MessageModule,
    JobListingModule,
  ],
})
export class AppModule {}
