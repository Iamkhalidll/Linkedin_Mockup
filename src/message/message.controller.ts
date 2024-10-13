import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  async send(@Body() body: { senderId: string; receiverId: string; content: string }) {
    return this.messageService.sendMessage(body.senderId, body.receiverId, body.content);
  }

  @Get(':userId')
  async get(@Param('userId') userId: string) {
    return this.messageService.getMessages(userId);
  }
}
