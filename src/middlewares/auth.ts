import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (token) {
      try {
        const decoded = this.jwtService.verify(token, {
          secret: process.env.JWT_SECRET,
          algorithms: ['HS256'],
        });
        req['user'] = decoded; // Armazenar os dados do usuário no request para uso posterior
        next();
      } catch (error) {
        // Tratar o erro de validação do token aqui, por exemplo, retornando um status 401
        return res.status(401).json({ message: 'Token inválido' });
      }
    } else {
      // Caso o token não seja fornecido, retornar um status 401
      return res.status(401).json({ message: 'Token não fornecido' });
    }
  }
}
