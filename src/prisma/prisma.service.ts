import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    try {
      await this.$connect();
      console.log('Prisma Client connected');
    } catch (err) {
      console.error('Error connecting Prisma Client', err);
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
