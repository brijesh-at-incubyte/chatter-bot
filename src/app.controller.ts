import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';




@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  login(@Request() request:any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
    return request.user;

  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
