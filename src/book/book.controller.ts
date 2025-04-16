import { Body, Controller, Get,Post, Param, ParseBoolPipe, ParseIntPipe, ValidationPipe, UseFilters, BadRequestException, UseGuards } from "@nestjs/common";
import { BookGuard } from "./book,guard";

@Controller('book')
export class BookController {

  @UseGuards(new BookGuard())
  @Get("/findAll")
  findAllBook(): string {
    return "find all book is hear";
  }

  @Post("/add")
  addBook(): string {
    return "Add has Book";
  }
}
