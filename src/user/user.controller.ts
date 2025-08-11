import { Controller, Get, UseGuards } from '@nestjs/common';
import * as client from 'generated/prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
  @Get('me')
  getMe(@GetUser() user: client.User) {
    return user;
  }
}
