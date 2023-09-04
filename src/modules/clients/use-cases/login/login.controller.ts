import { Controller, Post, Body, Res} from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginUserDto } from './login-dto';
import { Response } from "express";
import {
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';
@ApiTags("Clients")
@Controller('login')
export class LoginController {
    constructor(private readonly appservice: LoginService) { }

    @Post()
    @ApiOperation({summary: "Authenticate user"})
    @ApiResponse({
        status: 200,
        description: 'Return a sucess message, the new client and the bearer token',
    })
    @ApiResponse({
        status: 400,
        description: 'User or password is incorrect',
    })
    async login(@Body() body: LoginUserDto, @Res() res : Response) {
        const { email, password } = body;
        const response = await this.appservice.login({ email, password });
        res.status(200).send(response);   
    }

}
