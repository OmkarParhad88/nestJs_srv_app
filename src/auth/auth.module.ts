import { Module } from '@nestjs/common';
import { PassportLocalStrategy } from './passport.local.strategy';
import { UserModule } from 'src/User/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [PassportLocalStrategy],
  exports: [],
})
export class AuthModule {
  constructor() {
    console.log('Auth Module');
  }
}
