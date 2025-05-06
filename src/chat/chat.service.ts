import { Injectable } from '@nestjs/common';
import { OpenAiService } from '../services/open-ai.service';

@Injectable()
export class ChatService {
  constructor(private readonly openAiService: OpenAiService) {}

  async getChatResponse(userInput: string) {
    return this.openAiService.getMessageResponse(userInput)
  }
}
