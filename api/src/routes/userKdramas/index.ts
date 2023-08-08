import express from 'express';
import userKdramaRoutes from './userKdramaRoutes.js';

const router = express.Router();

router.use("/", userKdramaRoutes);

export default router;