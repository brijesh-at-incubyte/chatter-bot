import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { User, UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let prismaService:PrismaService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, 
        {
          provide:PrismaService,
          useFactory: () =>{
            return {
             user : { findFirst:jest.fn()}
            }
          }
        }
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    prismaService = module.get<PrismaService>(PrismaService);

    

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it("should get user from prisma", async() => {

    const userEmail = "someuser@gmail.com";

    const testUser: User = {
      email:userEmail,
      id : "id1",
      userName: "user999",
      firstName:"userfirstname",
      lastName:"userlastname",
      password:"somepassword"
      }

    jest.spyOn(prismaService.user, "findFirst").mockResolvedValue({...testUser,email:userEmail})

    const user = await service.getUserByEmail(userEmail)
    expect(prismaService.user.findFirst).toHaveBeenCalledTimes(1)
    expect(prismaService.user.findFirst).toHaveBeenCalledWith({
      where : {
        email:userEmail
      }
    })
    expect(user).toEqual(testUser)
  })
});
