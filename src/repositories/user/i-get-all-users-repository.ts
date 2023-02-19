import User from '@entities/User';

export default interface IGetAllUsers {
  list(): Promise<User[]>;
}
