import { Request, Response } from 'express';
import UpdateUser from './update-user';

export default class ControllerUpdateUser {
  constructor(private updateUser: UpdateUser) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;
    const name = request.body.name;

    try {
      const user = await this.updateUser.execute({
        id,
        name,
      });

      return response.status(200).json({
        messages: `User ${id} changed successfully`,
        user,
      });
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
      return response.status(409).json({
        message: 'User not found',
      });
    }
  }
}
