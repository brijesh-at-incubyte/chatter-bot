import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User, UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

export type UserInfo = Omit<User, 'password'>;
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  validateUser(email: string, pass: string): UserInfo {
    const user = this.userService.getUserByUserEmail(email);
    if (!user || user.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    return result;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async login(user: User) {
    const payload = { userName: user.userName, sub: user.userId };
    return { accessToken: this.jwtService.sign(payload) };
  }
}
