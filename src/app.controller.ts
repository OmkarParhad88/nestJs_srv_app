import { Controller, Post, Get, Delete, Put, Param } from '@nestjs/common';

@Controller('book')
export class BookController {
  //add book
  @Post('/add')
  addbook(): string {
    return 'this will add book';
  }

  //delete book
  @Delete('/delete')
  deletebook(): string {
    return 'this will delete book';
  }

  //update book
  @Put('/update')
  updatebook(): string {
    return 'this will update book';
  }

  //find all book
  @Get('/findAll')
  findbook(): string {
    return 'this will find all book';
  }

  @Get('/byId/:id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a ${params.id}`;
  }
}
