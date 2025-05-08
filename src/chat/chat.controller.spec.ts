import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { OpenAiService } from '.././services/open-ai.service';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';

describe('ChatController', () => {
  let controller: ChatController;
  let service: ChatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatController],
      providers: [
        {
          provide: ChatService,
          useFactory: () => {
            return {
              getChatResponse: jest.fn(),
            };
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key) => {
              // Return mock values for specific config keys
              switch (key) {
                case 'YOUR_CONFIG_KEY':
                  return 'someValue';
                default:
                  return null;
              }
            }),
          },
        },
        OpenAiService,
      ],
    }).compile();

    controller = module.get<ChatController>(ChatController);
    service = module.get<ChatService>(ChatService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call chat service in order to get response for given userInput', async () => {
    await controller.getChatCompletionMessage('userInput');
    expect(service.getChatResponse).toHaveBeenCalledTimes(1);
  });
});
