import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import{Request} from 'express'

@Injectable()
export class BookGuard implements CanActivate {
  public key: string = "idjfidhhjjidjidjfid";
  canActivate(context: ExecutionContext): boolean  {
    const request = context.switchToHttp().getRequest <Request> ();
    return request.header("key") === this.key;
  }
}