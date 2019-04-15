import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, JwtStrategy],
      imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
          secretOrPrivateKey: 'test',
        }),
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call sign method from JwtSerivce on signIn call', async () => {
    // @ts-ignore // jwtService is private property
    const spy = jest.spyOn(service.jwtService, 'sign');
    service.signIn();

    expect(spy).toBeCalled();
  });
});
