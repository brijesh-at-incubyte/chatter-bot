import { Test, TestingModule } from '@nestjs/testing';
import { ChatService } from './chat.service';
import { OpenAiService } from '.././services/open-ai.service';
import { ConfigService } from '@nestjs/config';

describe('ChatService', () => {
  let service: ChatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChatService,
        OpenAiService,
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
      ],
    }).compile();

    service = module.get<ChatService>(ChatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
