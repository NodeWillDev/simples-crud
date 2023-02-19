import controllerCreateUser from '@uses/create-user';
import controllerDeleteUser from '@uses/delete-user';
import controllerGetAllUsers from '@uses/get-all';
import controllerUpdateUser from '@uses/update-user';
import { Router } from 'express';

const router = Router();

// [X] Create
router.post('/user/create-user', (req, res) =>
  controllerCreateUser.handle(req, res)
);

// [X] Reading
router.get('/user/get-all', (req, res) =>
  controllerGetAllUsers.handle(req, res)
);

// [X] Update
router.put('/user/update-user/:id', (req, res) =>
  controllerUpdateUser.handle(req, res)
);

// [X] Delete
router.delete('/user/delete-user/:id', (req, res) =>
  controllerDeleteUser.handle(req, res)
);

export default router;
