import { Controller, Post, Body, Res} from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginUserDto } from './login-dto';
import { Response } from "express";

@Controller('login')
export class LoginController {
    constructor(private readonly appservice: LoginService) { }

    @Post()
    async login(@Body() body: LoginUserDto, @Res() res : Response) {
        const { email, password } = body;
        const response = await this.appservice.login({ email, password });
        res.status(200).send(response);   
    }

}
