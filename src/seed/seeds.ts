import { pool } from '../config/db';
import { Category } from '../data/categories';
import { Product } from '../data/products';

const categories: Category[] = [
  { id: 1, name: 'Frutas', active: true },
  { id: 2, name: 'Legumes', active: true },
  { id: 3, name: 'Verduras', active: true },
  { id: 4, name: 'Temperos', active: true },
  { id: 5, name: 'Cereais', active: true },
  { id: 6, name: 'Chocolate', active: true },
];

const products: Product[] = [
  {
    id: 1,
    categoryId: 1,
    description:
      'A melhor maçã da região e que conta com o melhor preço de qualquer quitanda. Este item conta com vitaminas essenciais para o fortalecimento corporal, resultando em uma vida saudável.',
    imgUrl: 'assets/fruits/apple.png',
    itemName: 'Maçã',
    price: 5.5,
    unit: 'kg',
    active: true,
  },
  {
    id: 2,
    categoryId: 1,
    imgUrl: 'assets/fruits/grape.png',
    itemName: 'Uva',
    price: 7.4,
    unit: 'kg',
    active: true,
    description:
      'A melhor uva da região e que conta com o melhor preço de qualquer quitanda. Este item conta com vitaminas essenciais para o fortalecimento corporal, resultando em uma vida saudável.',
  },
  {
    id: 3,
    categoryId: 1,
    imgUrl: 'assets/fruits/guava.png',
    itemName: 'Goiaba',
    price: 11.5,
    unit: 'kg',
    active: true,
    description:
      'A melhor goiaba da região e que conta com o melhor preço de qualquer quitanda. Este item conta com vitaminas essenciais para o fortalecimento corporal, resultando em uma vida saudável.',
  },
  {
    id: 4,
    categoryId: 2,
    imgUrl: 'assets/fruits/kiwi.png',
    itemName: 'Kiwi',
    price: 2.5,
    unit: 'un',
    active: true,
    description:
      'O melhor kiwi da região e que conta com o melhor preço de qualquer quitanda. Este item conta com vitaminas essenciais para o fortalecimento corporal, resultando em uma vida saudável.',
  },
  {
    id: 5,
    categoryId: 3,
    imgUrl: 'assets/fruits/mango.png',
    itemName: 'Manga',
    price: 2.5,
    unit: 'un',
    active: true,
    description:
      'A melhor manga da região e que conta com o melhor preço de qualquer quitanda. Este item conta com vitaminas essenciais para o fortalecimento corporal, resultando em uma vida saudável.',
  },
  {
    id: 6,
    categoryId: 4,
    imgUrl: 'assets/fruits/papaya.png',
    itemName: 'Mamão papaya',
    price: 8,
    unit: 'kg',
    active: true,
    description:
      'O melhor mamão da região e que conta com o melhor preço de qualquer quitanda. Este item conta com vitaminas essenciais para o fortalecimento corporal, resultando em uma vida saudável.',
  },
];

const seedCategories = async () => {
  for (const category of categories) {
    await pool.query(
      'CREATE TABLE IF NOT EXISTS categories (id SERIAL PRIMARY KEY, name VARCHAR(255), active BOOLEAN)'
    );
    await pool.query(
      'INSERT INTO categories (id, name, active) VALUES ($1, $2, $3)',
      [category.id, category.name, category.active]
    );
  }
};

const seedProducts = async () => {
  await pool.query(
    'CREATE TABLE IF NOT EXISTS products (id SERIAL PRIMARY KEY, categoryId INTEGER, description VARCHAR(255), imgUrl VARCHAR(255), itemName VARCHAR(255), price NUMERIC, unit VARCHAR(255), active BOOLEAN)'
  );

  for (const product of products) {
    await pool.query(
      'INSERT INTO products (id, categoryId, description, imgUrl, itemName, price, unit, active) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
      [
        product.id,
        product.categoryId,
        product.description,
        product.imgUrl,
        product.itemName,
        product.price,
        product.unit,
        product.active,
      ]
    );
  }
};

const seedDatabase = async () => {
  try {
    await seedCategories();
    await seedProducts();
    console.log('Seeding completed.');
  } catch (error) {
    console.error('Erro while seeding:', error);
  } finally {
    pool.end();
  }
};

seedDatabase();
