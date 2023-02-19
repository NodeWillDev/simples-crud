import UsersDataBase from '@databases/users-database';
import User from '@entities/User';
import IUpdateUserRepository from '../i-update-user-repository';

export default class UpdateUserRepositort implements IUpdateUserRepository {
  async updateName(id: string, name: string): Promise<User[]> {
    const index = UsersDataBase.users.findIndex((user) => user.id === id);

    if (index < 0) return [];

    UsersDataBase.users[index].name = name;
    const user = UsersDataBase.users.find((user) => user.id === id) as User;
    return [user];
  }
}
