import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import chalk from 'chalk';

import userRoutes from './routes/userRoutes.js';
import kdramaRoutes from './routes/kdramaRoutes.js';
import userKdramaRoutes from './routes/userKdramaRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

/* Middleware */
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

/* Routes */
app.use("/users", userRoutes);
app.use("/kdramas", kdramaRoutes);
app.use("/kdramas/users", userKdramaRoutes);

/* Default Routes */
app.use("/", (req, res) => res.json({ message: "KDrama Tracker API" }));

app.listen(PORT, () => console.log(chalk.hex("#00ff00")("[HTTP]") + ` KDramaTracker-API: Listening on port ${PORT}`));