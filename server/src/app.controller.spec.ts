import { CustomerService } from './services/customer.service';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [CustomerService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });
});
