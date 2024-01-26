import { Request, Response } from 'express';
import * as categoriesService from '../services/categoriesService';
import { Category } from '../data/categories';

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const response = await categoriesService.getAllCategories();
    res.json(response);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
