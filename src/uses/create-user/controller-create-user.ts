import { Request, Response } from 'express';
import CreateUser from './create-user';

export default class ControllerCreateUser {
  constructor(private createUser: CreateUser) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    try {
      await this.createUser.execute({
        name,
        email,
        password,
      });

      return response.status(201).json({
        message: 'User create with sucess',
      });
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
      return response.status(400).json({
        message: 'User already exists',
      });
    }
  }
}
