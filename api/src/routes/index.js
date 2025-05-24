import express from 'express';
import calculateApiRoutes from './calculateApiRoutes.js';
import productApiRoutes from './productApiRoutes.js';
import turnosApiRoutes from './turnosApiRoutes.js';

const mainRouter = express.Router();



mainRouter.use('/calculates', calculateApiRoutes);
mainRouter.use('/products', productApiRoutes);
mainRouter.use('/turnos', turnosApiRoutes);


export default mainRouter;
