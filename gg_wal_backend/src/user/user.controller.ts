import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { VerifyUserDto } from './dto/verify-user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Get('/generateSig/:walletAddr')
  generateSig(@Param('walletAddr') walletAddr: string) {
    return this.userService.generateSig(walletAddr);
  }
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post("verify")
  verify(@Body() {walletAddr, proof}: VerifyUserDto) {
    return this.userService.verifyUser(walletAddr, proof);
  }
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':walletAddr')
  findOne(@Param('walletAddr') walletAddr: string) {
    return this.userService.findOne(walletAddr);
  }

  @Delete(':walletAddr')
  remove(@Param('walletAddr') walletAddr: string) {
    return this.userService.remove(walletAddr);
  }
}
