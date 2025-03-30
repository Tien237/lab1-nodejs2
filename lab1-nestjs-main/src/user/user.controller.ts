import { Controller, Post, Body, Res, HttpStatus, UseGuards, Get, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(
    private readonly usersService: UserService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }

  @Post('register')
  async register(@Body() userDto, @Res() res) {
    userDto.password = await this.authService.hashPassword(userDto.password);
    const user = await this.usersService.create(userDto);
    return res.status(HttpStatus.CREATED).json(user);
  }

  @Post('login')
  async login(@Body() userDto, @Res() res) {
    const user = await this.usersService.findByEmail(userDto.email);
    const isValid = user && await this.authService.comparePasswords(userDto.password, user.password);
    
    return isValid 
      ? res.json({ token: await this.authService.generateToken(user) })
      : res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Invalid credentials' });
  }
}
