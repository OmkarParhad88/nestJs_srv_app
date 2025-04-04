import { Body, Controller, Get,Post, Param, ParseBoolPipe, ParseIntPipe, ValidationPipe } from "@nestjs/common";
import { BookPipe } from "./Pipes/book.pipe";
import { Book } from "./book.dto";
import { bookException } from "./book.exception";

@Controller('book')
export class BookController {

  @Get("/:id")
  findBookById(@Param('id' , ParseIntPipe) id: number): string {
    console.log(id, typeof(id));
    return "Book by id :"+ id;
  }

  @Get()
  helloException(): string {
    throw new bookException();
  }

  @Get("/name/:id")
  findNameById(@Param('id' , ParseBoolPipe) id: number): string {
    console.log(id, typeof(id));
    return "Book by id :"+ id;
  }

  @Post("/add")
  addBook(@Body( new ValidationPipe()) body:Book): string {
    return "Add has Book";
  }

}