import User from '@entities/User';

export default interface IUpdateUserRepository {
  updateName(id: string, name: string): Promise<User[]>;
}
