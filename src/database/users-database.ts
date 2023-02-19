import User from '@entities/User';

export default abstract class UsersDataBase {
  public static users: User[] = [];
}
