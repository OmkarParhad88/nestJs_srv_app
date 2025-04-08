import { Body, Controller, Get,Post, Param, ParseBoolPipe, ParseIntPipe, ValidationPipe, UseFilters, BadRequestException } from "@nestjs/common";
import { Book } from "./book.dto";
import { bookException } from "./book.exception";
import { BookCustomEXPFilter } from "./book.exception.filter";

@Controller('book')
export class BookController {

  @Get("/:id")
  findBookById(@Param('id' , ParseIntPipe) id: number): string {
    console.log(id, typeof(id));
    return "Book by id :"+ id;
  }

  @Get()
  @UseFilters(BookCustomEXPFilter)
/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Throws a BadRequestException to test the exception filter.
   */
/******  9c5ac0b6-4e7f-4633-bed4-1b187a7a5acc  *******/
  helloException(): string {
    throw new BadRequestException();
    
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
