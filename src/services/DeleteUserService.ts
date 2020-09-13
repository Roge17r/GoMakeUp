import { getRepository } from 'typeorm';
import User from '../models/Users';

interface RequestDTO {
  email: string;
}
class DeleteUserService {
  public async execute({ email }: RequestDTO): Promise<void> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (!checkUserExists) {
      throw new Error('User do not exists.');
    }

    await usersRepository.delete({ email });
  }
}

export default DeleteUserService;
