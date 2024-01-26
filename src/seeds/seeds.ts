import { pool } from '../config/db';

interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number;
  categoryId: number;
  description: string;
  imgUrl: string;
  itemName: string;
  price: number;
  unit: string;
}

const categories: Category[] = [
  { id: 1, name: 'Frutas' },
  { id: 2, name: 'Legumes' },
  { id: 3, name: 'Verduras' },
  { id: 4, name: 'Temperos' },
  { id: 5, name: 'Cereais' },
  { id: 6, name: 'Chocolate' },
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
  },
  {
    id: 2,
    categoryId: 1,
    imgUrl: 'assets/fruits/grape.png',
    itemName: 'Uva',
    price: 7.4,
    unit: 'kg',
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
    description:
      'O melhor mamão da região e que conta com o melhor preço de qualquer quitanda. Este item conta com vitaminas essenciais para o fortalecimento corporal, resultando em uma vida saudável.',
  },
];

const seedCategories = async () => {
  for (const category of categories) {
    await pool.query('INSERT INTO categories (id, name) VALUES ($1, $2)', [
      category.id,
      category.name,
    ]);
  }
};

const seedProducts = async () => {
  for (const product of products) {
    await pool.query(
      'INSERT INTO products (id, categoryId, description, imgUrl, itemName, price, unit) VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [
        product.id,
        product.categoryId,
        product.description,
        product.imgUrl,
        product.itemName,
        product.price,
        product.unit,
      ]
    );
  }
};

const seedDatabase = async () => {
  try {
    await seedCategories();
    await seedProducts();
    console.log('Seeding completo.');
  } catch (error) {
    console.error('Erro durante o seeding:', error);
  } finally {
    pool.end();
  }
};

seedDatabase();
