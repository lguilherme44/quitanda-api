import { pool } from '../config/db';
import { Product } from '../data/products';

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const { rows } = await pool.query('SELECT * FROM products');
    return rows;
  } catch (err) {
    return [];
  }
};

export const getProductsByCategory = async (
  categoryId: number
): Promise<Product[]> => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM products WHERE categoryId = $1',
      [categoryId]
    );
    return rows;
  } catch (err) {
    return [];
  }
};
