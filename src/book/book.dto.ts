import { IsNumber, IsString } from "class-validator";

export class Book {
  @IsString()
  name: string;
  @IsNumber()
  price: number;
}