 
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';
import { AuthService, UserInfo } from './auth.service';



export interface UserRequestDto {
  userName:string,
  firstName:string,
  lastName:string,
  email:string,
  password:string
}
@Controller('auth')
export class AuthController {

    constructor(private readonly authService:AuthService, private readonly userService:UserService){}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    login(@Request() request: any) {
      return  this.authService.login(request.user as UserInfo);
    }

    @Post('signUp')
    async createUser(@Body() user:UserRequestDto){
      return await this.userService.createUser(user)
    }

}
