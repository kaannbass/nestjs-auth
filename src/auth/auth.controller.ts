import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  async signup(@Body() dto: AuthDto) {
    const result = await this.authService.signup(dto);
    return result;
  }

  @Post('signin')
  async signin(@Body() dto: AuthDto, @Res() res, @Req() req) {
    const result = await this.authService.signin(dto, req, res);
    return result;
  }

  @Post('signout')
  async signout(@Res() res, @Req() req) {
    const result = await this.authService.signout(req, res);
    return result;
  }
}
