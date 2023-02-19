import IUpdateUserRepository from '@repositories/user/i-update-user-repository';
import UpdateUserRepositort from '@repositories/user/implementations/update-user-repository';
import ControllerUpdateUser from './controller-update-user';
import UpdateUser from './update-user';

const updateUserRepository: IUpdateUserRepository = new UpdateUserRepositort();
const updateUser: UpdateUser = new UpdateUser(updateUserRepository);

const controllerUpdateUser: ControllerUpdateUser = new ControllerUpdateUser(
  updateUser
);

export default controllerUpdateUser;
