import IGetAllUsers from '@repositories/user/i-get-all-users-repository';
import GetAllUsersRepository from '@repositories/user/implementations/get-all-users-repository';
import ControllerGetAllUsers from './controller-get-all-users';

const allUsersRepository: IGetAllUsers = new GetAllUsersRepository();

const controllerGetAllUsers: ControllerGetAllUsers = new ControllerGetAllUsers(
  allUsersRepository
);

export default controllerGetAllUsers;
