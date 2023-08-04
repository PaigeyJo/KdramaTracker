import express from 'express';
import kdramaRoutes from './kdramaRoutes.js';

const router = express.Router();

router.use("/kdramas", kdramaRoutes);

export default router;