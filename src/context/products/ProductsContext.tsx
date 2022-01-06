import { createContext } from 'react';
import { Product } from '../../interfaces/Product';

type ProductsContextProps = {
  products: Product[];
  loadProducts: () => Promise<void>;
  addProduct: ( categoryId: string, productName: string ) => Promise<Product>;
  updateProduct: ( categoryId: string, productName: string, productId: string ) => Promise<void>;
  deleteProduct: ( id: string ) => Promise<void>;
  loadProductById: ( id: string ) => Promise<Product>;
  uploadImage: ( data: any, id: string ) => Promise<void>; // TODO: cambiar ANY
}

export const ProductsContext = createContext({} as ProductsContextProps);