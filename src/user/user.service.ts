import { Injectable } from '@nestjs/common';

export interface User {
  userId: string;
  userName: string;
  password: string;
  email: string;
}

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      userId: '1',
      userName: 'John',
      password: 'somepassword',
      email: 'jhon@gmail.com',
    },
    {
      userId: '2',
      userName: 'Doe',
      password: 'someanotherpassword',
      email: 'doe@gmail.com',
    },
  ];

  getUserByUserEmail(email: string): User {
    console.log(email);
    const user = this.users.find((user) => user.email === email)!;
    return user;
  }
}
