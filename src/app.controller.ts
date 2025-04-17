import { Controller, Get, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
@Controller("app")
export class AppController {
  @Get('')
  @UseGuards(AuthGuard("local"))
  getHello(@Request() req): string|undefined {
    return req.user;
  }
}