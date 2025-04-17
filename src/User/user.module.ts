import { Module } from '@nestjs/common';
import { UserSerivce } from './user.service';

@Module({
  imports: [],
  controllers: [],
  providers: [UserSerivce],
  exports: [UserSerivce],
})
export class UserModule {
  constructor() {
    console.log('User Module');
  }
}
