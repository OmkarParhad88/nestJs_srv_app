import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Book } from "../book.dto";


export class BookPipe implements PipeTransform <any>{
  async transform(value: any, metadata: ArgumentMetadata) {
    const BookClass = plainToInstance(Book, value);
    const errors = await validate(BookClass);
    if (errors.length > 0) {
      throw new BadRequestException(" Validation Failed " + errors);
    }
    console.log(value,typeof (value))
    return typeof (value)

  }
}