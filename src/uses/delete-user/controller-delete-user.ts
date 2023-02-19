import { Request, Response } from 'express';
import DeleteUser from './delete-user';

export default class ControllerDeleteUser {
  constructor(private deleteUser: DeleteUser) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const user = await this.deleteUser.execute(id);

      return response.status(200).json({
        message: 'User id has been deleted',
        user,
      });
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
      return response.status(409).json({
        message: 'Invalid User ID',
      });
    }
  }
}
