 

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService, UserInfo } from '../auth.service';

@Injectable()
 
export class LocalStrategy extends PassportStrategy(Strategy)  {
  constructor(private readonly authService: AuthService) {
     
    super({
      usernameField: 'email'
    });
  }

  async validate(email: string, password: string) : Promise<UserInfo> {
    return await this.authService.validateUser(email, password);
  }
}