import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { User } from './user/user.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  login(@Request() request: any) {
    return this.authService.login(request.user as User);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/hello')
  getHello(): string {
    return 'Hello';
  }
}
