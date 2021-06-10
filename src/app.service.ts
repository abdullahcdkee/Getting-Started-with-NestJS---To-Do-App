import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello to the world of NestJS, Abdullah! It is truly a pleasure to make your acquaintance :D'
  }
}
