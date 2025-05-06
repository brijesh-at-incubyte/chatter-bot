import { Injectable } from '@nestjs/common';
import { ChatResponse, OpenAiService } from '../services/open-ai.service';

@Injectable()
export class ChatService {
  constructor(private readonly openAiService: OpenAiService) {}

  async getChatResponse(userInput: string) : Promise<ChatResponse> {
    return this.openAiService.getMessageResponse(userInput)
  }
}
