import { getRepository } from 'typeorm';
import User from '../models/Users';

interface RequestDTO {
  id: string;
}
class CreateUserService {
  public async execute({ id }: RequestDTO): Promise<void> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { id },
    });

    if (!checkUserExists) {
      throw new Error('User do not exists.');
    }

    await usersRepository.delete(id);
  }
}

export default CreateUserService;
