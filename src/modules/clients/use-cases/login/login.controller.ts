import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginUserDto } from './login-dto';

@Controller('login')
export class LoginController {
    constructor(private readonly appservice: LoginService){}

@Post()
async login(@Body() body : LoginUserDto) {
    const {email, password} = body;
    return await this.appservice.login({email, password});
    
}

}
