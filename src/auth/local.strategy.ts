 

import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
 
export class LocalStrategy extends PassportStrategy(Strategy)  {
  constructor(private readonly authService: AuthService) {
     
    super({
      usernameField: 'email'
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate(email: string, password: string) : any {

    return this.authService.validateUser(email, password);
    
  }
}