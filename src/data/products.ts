export interface Product {
  id: number;
  categoryId: number;
  description: string;
  imgUrl: string;
  itemName: string;
  price: number;
  unit: string;
}

const products: Product[] = [
  //... seus produtos
];

export default products;
