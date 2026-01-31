import { Injectable } from '@nestjs/common';
import { RequestIndex } from './interfaces/request-index';

@Injectable()
export class AppService {
  /**
   * Increment request count, return response with simulated delay
   * @returns Delayed success message
   */
  async incrementRequestCount(requestIndex: string): Promise<RequestIndex> {
    return new Promise<RequestIndex>((resolve) => {
      setTimeout(
        () => {
          resolve({ requestIndex });
        },
        Math.ceil(Math.random() * 2000) || 1,
      );
    });
  }
}
