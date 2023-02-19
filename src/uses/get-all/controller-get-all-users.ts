import IGetAllUsers from '@repositories/user/i-get-all-users-repository';
import { Request, Response } from 'express';

export default class ControllerGetAllUsers {
  constructor(private allUsers: IGetAllUsers) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const users = await this.allUsers.list();

    return response.status(200).json({
      length: users.length,
      users,
    });
  }
}
