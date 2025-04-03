import { Body, Controller, Get,Post, Param, ParseBoolPipe, ParseIntPipe } from "@nestjs/common";
import { BookPipe } from "./Pipes/book.pipe";

@Controller('book')
export class BookController {

  @Get("/:id")
  findBookById(@Param('id' , ParseIntPipe) id: number): string {
    console.log(id, typeof(id));
    return "Book by id :"+ id;
  }

  @Get("/name/:id")
  findNameById(@Param('id' , ParseBoolPipe) id: number): string {
    console.log(id, typeof(id));
    return "Book by id :"+ id;
  }

  @Post("/add")
  addBook(@Body( new BookPipe()) body:Book): string {
    return "Add Book";
  }

}