import express from 'express';
import * as userKdramasController from '@@controllers/userKdramas/index.js';

const router = express.Router();

router.route("/")
.get(userKdramasController.index)
.post(userKdramasController.create)

router.route("/id/:id")
.get(userKdramasController.getOne)
.delete(userKdramasController.destroy)
.put(userKdramasController.update)

export default router;