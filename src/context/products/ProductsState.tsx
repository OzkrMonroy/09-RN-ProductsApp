import React, { useState } from 'react';
import { Product } from '../../interfaces/Product';
import { ProductsContext } from './ProductsContext';

export const ProductsState = ({ children }: any) => {

    const [products, setProducts] = useState<Product[]>([]);

    const loadProducts = async () => {

    }

    const addProduct = async (categoryId: string, productName: string) => {

    }

    const updateProduct = async (categoryId: string, productName: string, productId: string) => {

    }

    const deleteProduct = async (id: string) => {

    }

    const loadProductById = async (id: string) => {
        throw new Error('Not implemented');
    };

    // TODO: cambiar ANY
    const uploadImage = async (data: any, id: string) => {

    }

    return (
        <ProductsContext.Provider value={{
            products,
            loadProducts,
            addProduct,
            updateProduct,
            deleteProduct,
            loadProductById,
            uploadImage,
        }}>
            {children}
        </ProductsContext.Provider>
    )
}