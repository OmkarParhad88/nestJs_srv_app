import { HttpException, HttpStatus } from "@nestjs/common";

export class bookException extends HttpException{
  constructor() {
    super("this is my exception", HttpStatus.BAD_REQUEST);
  }
}