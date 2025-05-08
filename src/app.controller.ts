import { Controller, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor() {}

  @UseGuards(AuthGuard('jwt'))
  @Get('/hello')
  getHello(): string {
    return 'Hello';
  }
}
