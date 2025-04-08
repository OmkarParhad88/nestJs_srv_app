import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import{Request , Response} from 'express';

@Catch(HttpException)
export class BookCustomEXPFilter implements ExceptionFilter{
  catch(exception: HttpException, host: ArgumentsHost): any {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const status = exception.getStatus();
    
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      hostname: request.get('host')
    });

    throw new Error("Method not implemented.");
  }

}