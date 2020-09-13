import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';
import DeleteUserService from '../services/DeleteUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, email, password });

    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.delete('/delete', async (request, response) => {
  try {
    const { email } = request.body;

    const deleteUser = new DeleteUserService();

    await deleteUser.execute({ email });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
  return response.json({ message: 'User deleted' });
});

export default usersRouter;
