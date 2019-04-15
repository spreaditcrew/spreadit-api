import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { runInThisContext } from 'vm';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async signIn(): Promise<string> {
    // TODO set correct JTW payload
    const user: JwtPayload = { email: 'test@email.com' };
    return this.jwtService.sign(user);
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    // TODO add validation from user service
    if (payload.email === 'test@email.com') {
      return {
        email: 'test@email.com',
        name: 'Name',
        surname: 'Hehe',
      };
    } else {
      return null;
    }
  }
}
