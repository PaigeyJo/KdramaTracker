import express from 'express';
import * as kdramasController from '@@controllers/kdramas/index.js';
import { extractPaginationParams } from '@@middleware/index.js';

const router = express.Router();

router.route("/")
.get(extractPaginationParams, kdramasController.index)
.post(kdramasController.create)

router.route("/id/:id")
.get(kdramasController.getOne)
.delete(kdramasController.destroy)
.put(kdramasController.update)

export default router;