import UsersDataBase from '@databases/users-database';
import User from '@entities/User';
import IGetAllUsers from '../i-get-all-users-repository';

export default class GetAllUsersRepository implements IGetAllUsers {
  async list(): Promise<User[]> {
    return UsersDataBase.users;
  }
}
