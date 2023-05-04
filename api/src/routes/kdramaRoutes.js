import express from 'express';
import * as kdramasController from '../controllers/kdramasController.js';

const router = express.Router();

router.route("/")
.get(kdramasController.index)
.post(kdramasController.create)

router.route("/id/:id")
.get(kdramasController.getById)
.delete(kdramasController.destroy)

export default router;