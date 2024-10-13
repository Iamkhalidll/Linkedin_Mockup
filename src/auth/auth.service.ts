import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthDto } from './auth.dto';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async register(email: string, password: string) {
    const hashedPassword = await argon2.hash(password);
    const user = await this.userService.createUser(email, hashedPassword);
    return user;
  }

  async login(email: string, password: string) {
    const user = await this.userService.findUserByEmail(email);
    if (!user || !(await argon2.verify(user.password, password))) {
      throw new Error('Invalid credentials');
    }
    const token = this.jwtService.sign({ id: user._id });
    return { token };
  }
}
