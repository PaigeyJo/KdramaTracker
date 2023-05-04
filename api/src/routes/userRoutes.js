import express from 'express';
import * as usersController from '../controllers/usersController.js';

const router = express.Router();

router.route("/")
.get(usersController.index)
.post(usersController.create)
.put(usersController.update)

router.route("/id/:id")
.get(usersController.getById)
.delete(usersController.destroy)

export default router;
