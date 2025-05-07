import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { OpenAiService } from 'src/services/open-ai.service';

@Module({
  controllers: [ChatController],
  providers: [ChatService, OpenAiService],
})
export class ChatModule {}
