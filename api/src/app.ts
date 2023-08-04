import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { kdramaRoutes } from '@@routes/index.js';

function initializeApp(): Application {
    const app = express();

    app.use(morgan("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors());
    app.set("trust proxy", true);
    app.set("trust proxy", "loopback");

    /* Routes */
    app.use("/kdrama", kdramaRoutes);

    return app;
};

export default initializeApp;