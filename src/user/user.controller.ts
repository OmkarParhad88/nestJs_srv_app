import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {

  @Post()
  create(): string {
    return "this is user Service.create()";
  }

  @Get()
  findAll():  string {
    return "this is user Service.findAll()";
  }
}
