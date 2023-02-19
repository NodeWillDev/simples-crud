import UsersDataBase from '@databases/users-database';
import User from '@entities/User';
import IDeleteUserRepository from '../i-delete-user-repository';

export default class DeleteUserRepository implements IDeleteUserRepository {
  async delete(id: string): Promise<void> {
    UsersDataBase.users.splice(
      UsersDataBase.users.findIndex((user) => user.id === id),
      1
    );
  }
  async exists(id: string): Promise<User | undefined> {
    const userExists = UsersDataBase.users.find((user) => user.id === id);
    return userExists;
  }
}
