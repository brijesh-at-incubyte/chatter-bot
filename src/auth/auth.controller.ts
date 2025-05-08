 
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../user/user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService:AuthService){}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    login(@Request() request: any) {
      return this.authService.login(request.user as User);
    }

}
