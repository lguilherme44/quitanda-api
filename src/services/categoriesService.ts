import { pool } from '../config/db';
import { Category } from '../data/categories';

export const getAllCategories = async (): Promise<Category[]> => {
  try {
    const { rows } = await pool.query('SELECT * FROM categories');
    return rows;
  } catch (err) {
    return [];
  }
};
