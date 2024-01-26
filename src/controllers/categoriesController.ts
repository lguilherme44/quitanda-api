import { Request, Response } from 'express';
import categories from '../data/categories';

export const getAllCategories = (req: Request, res: Response): void => {
  res.json(categories);
};
