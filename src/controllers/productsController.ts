import { Request, Response } from 'express';
import products from '../data/products';

export const getAllProducts = (req: Request, res: Response): void => {
  res.json(products);
};

export const getProductsByCategory = (req: Request, res: Response): void => {
  const categoryId = parseInt(req.params.categoryId, 10);
  const filteredProducts = products.filter(
    product => product.categoryId === categoryId
  );
  res.json(filteredProducts);
};
