import { createContext } from 'react';
import { ImagePickerResponse } from 'react-native-image-picker';
import { Product } from '../../interfaces/Product';

type ProductsContextProps = {
  products: Product[];
  loadProducts: () => Promise<void>;
  addProduct: ( categoryId: string, productName: string ) => Promise<Product>;
  updateProduct: ( categoryId: string, productName: string, productId: string ) => Promise<void>;
  deleteProduct: ( id: string ) => Promise<void>;
  loadProductById: ( id: string ) => Promise<Product>;
  uploadImage: ( data: ImagePickerResponse, id: string ) => Promise<void>;
}

export const ProductsContext = createContext({} as ProductsContextProps);