import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { BookingsController } from './bookings/bookings.controller';
import { VenuesController } from './venues/venues.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/demotestnestjs'), UserModule],
  controllers: [AppController, UserController, AuthController, BookingsController, VenuesController],
  providers: [AppService, AuthService],
})
export class AppModule {}
