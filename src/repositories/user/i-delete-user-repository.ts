import User from '@entities/User';

export default interface IDeleteUserRepository {
  delete(id: string): Promise<void>;

  exists(id: string): Promise<User | undefined>;
}
