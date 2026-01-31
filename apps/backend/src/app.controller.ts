import {
  Body,
  Controller,
  HttpCode,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { RequestIndex } from './interfaces/request-index';
import { ResponseTimeInterceptor } from './response-time.interceptor';
import { Throttle } from '@nestjs/throttler';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @HttpCode(200)
  @UseInterceptors(ResponseTimeInterceptor)
  @Throttle({ default: { ttl: 10000, limit: 50 } })
  incrementRequestCount(
    @Body('requestIndex') requestIndex: string,
  ): Promise<RequestIndex> {
    return this.appService.incrementRequestCount(requestIndex);
  }
}
