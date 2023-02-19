import User from '@entities/User';
import UpdateUserRepositort from '@repositories/user/implementations/update-user-repository';
import IUpdateUserDTO from './DTO-update-user';

export default class UpdateUser {
  constructor(private updateUserRepository: UpdateUserRepositort) {}

  async execute(props: IUpdateUserDTO): Promise<User> {
    const { id, name } = props;

    const user = await this.updateUserRepository.updateName(id, name);
    if (user.length < 1) {
      throw new Error('This user does not exist');
    }

    return user[0];
  }
}
