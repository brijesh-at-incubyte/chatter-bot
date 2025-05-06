/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { OpenAI } from "openai"
import { CHAT_MODEL } from "src/chat/enum/chat-model.enum";


@Injectable()
export class OpenAiService {
    constructor(private readonly configService:ConfigService){}

    async getMessageResponse(userInput:string){
        const openAiClient = new OpenAI({
            apiKey: this.configService.get<string>('OPENAI_KEY'),
          });
          const response = await openAiClient.responses.create({
            model: CHAT_MODEL.GPT_4o,
            input: userInput,
            temperature: 0.1,
            tool_choice: 'auto',
          });
      
          return response.output_text;
    }
}