import express from 'express';
import userController from '../controllers/UserController';


const router = express.Router();

router.get('/users', userController.list);

router.post('/users', userController.create);

router.get('/users/:id', userController.show);

router.delete('/users/:id', userController.remove);

router.put('/users/:id', userController.update);


export default router;
