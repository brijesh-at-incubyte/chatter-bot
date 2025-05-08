import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UserService } from '../user/user.service';

export type UserInfo = Omit<User, 'password'>;
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<UserInfo> {
    const user = await this.userService.getUserByEmail(email);
    if (!user || user.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    return result;
  }

  login(user: UserInfo) {
    const payload = { userName: user.userName, sub: user.id };
    return { accessToken: this.jwtService.sign(payload) };
  }

 
}
