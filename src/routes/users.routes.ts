import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';
import DeleteUserService from '../services/DeleteUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({ name, email, password });

  delete user.password;

  return response.json(user);
});

usersRouter.delete('/delete', async (request, response) => {
  const { email } = request.body;

  const deleteUser = new DeleteUserService();

  await deleteUser.execute({ email });

  return response.json({ message: 'User deleted' });
});

export default usersRouter;
