import { Controller, Post, Get, Delete, Put, Param } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  //nest js has provided me with the object
  constructor(private bookService: BookService) {}
  //add book
  @Post('/add')
  addbook(): string {
    return this.bookService.addBook();
  }

  //update book
  @Put('/update')
  updatebook(): string {
    return this.bookService.updateBook();
  }

  //find all book
  @Get('/findAll')
  findbook(): string {
    return this.bookService.findbook();
  }

  @Get('/byId/:id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a ${params.id}`;
  }
}
