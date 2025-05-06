import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User, UserService } from '../user/user.service';



export type UserInfo = Omit<User, "password"> 
@Injectable()
export class AuthService {


    constructor(private readonly userService: UserService){}

     
    validateUser(email:string, pass:string) : UserInfo{
        const user =  this.userService.getUserByUserEmail(email)
        if(!user || user.password !== pass){
            throw new UnauthorizedException()
        }
        const {passowrd, ...result} = user;
        return result;
    }

}
