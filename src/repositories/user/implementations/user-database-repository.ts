import UsersDataBase from '@databases/users-database';
import User from '@entities/User';
import IUserRepository from '../i-user-repository';

export default class UserDatabaseRepository implements IUserRepository {
  async findByEmail(email: string): Promise<User | undefined> {
    const user = UsersDataBase.users.find((user) => user.email == email);

    return user;
  }

  async save(user: User): Promise<void> {
    const _user = new User({
      email: user.email,
      name: user.name,
      password: user.password,
    });
    UsersDataBase.users.push(_user);
  }
}
