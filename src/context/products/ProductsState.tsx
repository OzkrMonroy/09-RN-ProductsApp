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
        try {
            const resp = await coffeeApi.post<Product>('/productos', { nombre: productName, categoria: categoryId })
            setProducts([...products, resp.data])

            return resp.data
        } catch (error: any) {
            console.log('error', error.response.data);
            throw new Error('Error')
        }
    }

    const updateProduct = async (categoryId: string, productName: string, productId: string) => {
        console.log('update', { categoryId, productName, productId });
        try {
            const resp = await coffeeApi.put<Product>(`/productos/${productId}`, { nombre: productName, categoria: categoryId })
            const newProductsList = products.map(product => product._id === resp.data._id ? resp.data : product)
            setProducts(newProductsList)
        } catch (error: any) {
            console.log('error', error.response.data);
        }
    }

    const deleteProduct = async (id: string) => {

    }

    const loadProductById = async (id: string): Promise<Product> => {
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