import { Router } from 'express';
import * as productsController from '../controllers/productsController';

const router = Router();

router.get('/', productsController.getAllProducts);
router.get('/:categoryId', productsController.getProductsByCategory);

export default router;
