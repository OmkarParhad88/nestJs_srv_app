import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Request } from "express";

@Injectable()
export class AppInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    console.log('App Interceptor');
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    request.body.name = "this is interceptor operation";
    request.body.age = 23;
    return next.handle().pipe(map((data)=> {
      data = data+" this is interceptor operation";
      return data;
    }));
  }
}