import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './User/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {
  constructor() {
    console.log('App Module');
  }
}
