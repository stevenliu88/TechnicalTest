import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { CustomerService } from './services/customer.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CustomerService],
})
export class AppModule {}
