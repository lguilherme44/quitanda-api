import { Request, Response } from 'express';
import * as productService from '../services/productsService';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const response = await productService.getAllProducts();
    res.json(response);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

export const getProductsByCategory = async (req: Request, res: Response) => {
  try {
    const categoryId = parseInt(req.params.categoryId, 10);
    const response = await productService.getProductsByCategory(categoryId);
    res.json(response);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
