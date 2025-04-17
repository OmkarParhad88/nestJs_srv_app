import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from "src/User/user.entity";
import { UserSerivce } from "src/User/user.service";

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {

  constructor(private readonly userService: UserSerivce) {
    super();

  }
  validate(username: string, password: string): User | undefined {
    const user: User | undefined = this.userService.getUserByName(username);
    if (!user) throw new UnauthorizedException();
    if (user && user.password === password) return user;
  }

}