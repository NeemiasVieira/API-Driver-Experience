import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private readonly appservice: LoginService){}

@Post()
async login(@Body() body : {email: string, password: string}) {
    const {email, password} = body;
    return await this.appservice.login(email, password);
    
}

}
