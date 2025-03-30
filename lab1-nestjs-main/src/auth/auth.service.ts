import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  
  async generateToken(user) {
    return this.jwtService.sign({ id: user.id, role: user.role });
  }

  async hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }

  async comparePasswords(password: string, hash: string) {
    return bcrypt.compare(password, hash);
  }
}
