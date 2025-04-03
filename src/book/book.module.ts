import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BookController } from './book.controller';

@Module({
  imports: [],
  exports: [],
  providers: [],
  controllers: [BookController],

})
export class BookModule {
}