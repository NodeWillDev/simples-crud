import IUserRepository from '@repositories/user/i-user-repository';
import ICreateUserDTO from './DTO-create-user';

export default class CreateUser {
  constructor(private userRepository: IUserRepository) {}

  async execute(dto: ICreateUserDTO): Promise<void> {
    if (await this.userRepository.findByEmail(dto.email)) {
      throw new Error('User already exists');
    }

    await this.userRepository.save(dto);
  }
}
