import User from '@entities/User';
import IDeleteUserRepository from '@repositories/user/i-delete-user-repository';

export default class DeleteUser {
  constructor(private deleteUserRepository: IDeleteUserRepository) {}

  async execute(id: string): Promise<User> {
    const user = await this.deleteUserRepository.exists(id);
    if (!user) {
      throw new Error('This user does not exist');
    }

    await this.deleteUserRepository.delete(id);
    return user;
  }
}
