 

import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService, UserInfo } from '../auth.service';

@Injectable()
 
export class LocalStrategy extends PassportStrategy(Strategy)  {
  constructor(private readonly authService: AuthService) {
     
    super({
      usernameField: 'email'
    });
  }

  validate(email: string, password: string) : UserInfo {
    return this.authService.validateUser(email, password);
  }
}