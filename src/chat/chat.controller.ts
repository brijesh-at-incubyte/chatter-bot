import { Controller, Get } from '@nestjs/common';

@Controller('api/chat')
export class ChatController {

    @Get('')
    getHello(): string {
        return 'Hello Chat!';
    }
}
