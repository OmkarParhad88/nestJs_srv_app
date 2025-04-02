import { Controller, Get, Post, } from "@nestjs/common";

@Controller('book')
export class BookController {
  //add book
  @Post()
  addBook(): string {
    return "this is add book function";
  }

  @Get()
  getAllBook(): string {
    return "this is get all book function";
  }

}