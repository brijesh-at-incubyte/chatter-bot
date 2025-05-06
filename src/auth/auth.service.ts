import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User, UserService } from '../user/user.service';

@Injectable()
export class AuthService {


    constructor(private readonly userService: UserService){}

     
    validateUser(email:string, password:string) : User {
        const user =  this.userService.getUserByUserEmail(email)
        if(!user || user.password !== password){
            throw new UnauthorizedException()
        }
        return user;
    }

}
