import IDeleteUserRepository from '@repositories/user/i-delete-user-repository';
import DeleteUserRepository from '@repositories/user/implementations/delete-user-repository';
import ControllerDeleteUser from './controller-delete-user';
import DeleteUser from './delete-user';

const deleteUserRepository: IDeleteUserRepository = new DeleteUserRepository();
const deleteUser: DeleteUser = new DeleteUser(deleteUserRepository);
const controllerDeleteUser: ControllerDeleteUser = new ControllerDeleteUser(
  deleteUser
);

export default controllerDeleteUser;
