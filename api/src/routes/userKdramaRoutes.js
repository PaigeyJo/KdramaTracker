import express from 'express';
import * as userKdramasController from '../controllers/userKdramasController.js';

const router = express.Router();

router.route("/")
.get(userKdramasController.index)
.post(userKdramasController.create)

router.route("/id/:id")
.get(userKdramasController.getById)
.delete(userKdramasController.destroy)

export default router;