import React, { useEffect, useState } from 'react';
import { Product, ProductResponse } from '../../interfaces/Product';
import { ProductsContext } from './ProductsContext';
import coffeeApi from '../../api/coffeeApi';

export const ProductsState = ({ children }: any) => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = async () => {
        const resp = await coffeeApi.get<ProductResponse>('/productos?limite=50')
        const { productos } = resp.data
        setProducts([...productos])
    }

    const addProduct = async (categoryId: string, productName: string) => {

    }

    const updateProduct = async (categoryId: string, productName: string, productId: string) => {

    }

    const deleteProduct = async (id: string) => {

    }

    const loadProductById = async (id: string):Promise<Product> => {
        const resp = await coffeeApi.get<Product>(`/productos/${id}`)
        return resp.data
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