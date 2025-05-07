import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('api/chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  getHello(): string {
    return 'Hello Chat!';
  }

  @Post()
  getChatCompletionMessage(@Body('userInput') userInput: string) {
    return this.chatService.getChatResponse(userInput);
  }
}
