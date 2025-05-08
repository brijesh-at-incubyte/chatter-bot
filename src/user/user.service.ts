import { Injectable } from '@nestjs/common';
import { UserRequestDto } from 'src/auth/auth.controller';
import { PrismaService } from '../prisma/prisma.service';



export interface User {
  id: string;
  userName: string;
  password: string;
  email: string;
  firstName:string,
  lastName:string
}

@Injectable()
export class UserService {
    
    constructor(private readonly prismaService: PrismaService){}
    
    async getUserByEmail(email: string) : Promise<User> {
      const user = await this.prismaService.user.findFirst({
      where : {
        email
      }
      })
      return user as User;
    }

    async createUser(user: UserRequestDto){
        return await this.prismaService.user.create({
            data: user
        })
      }

  
}
