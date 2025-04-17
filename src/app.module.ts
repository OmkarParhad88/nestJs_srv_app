import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {
  constructor() {
    console.log('App Module');
  }
}
