import IUserRepository from '@repositories/user/i-user-repository';
import UserDatabaseRepository from '@repositories/user/implementations/user-database-repository';
import ControllerCreateUser from './controller-create-user';
import CreateUser from './create-user';

const userRepository: IUserRepository = new UserDatabaseRepository();
const createUser: CreateUser = new CreateUser(userRepository);
const controllerCreateUser: ControllerCreateUser = new ControllerCreateUser(
  createUser
);

export default controllerCreateUser;
