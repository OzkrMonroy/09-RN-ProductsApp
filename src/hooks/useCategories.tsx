import { useEffect, useState } from 'react'
import coffeeApi from '../api/coffeeApi';
import { CategoriesResponse, Category } from '../interfaces/Categories';

export const useCategories = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = async () => {
    const response = await coffeeApi.get<CategoriesResponse>('/categorias')
    const { categorias } = response.data

    setCategories(categorias)
    setIsLoading(false)
  }

  return { categories, isLoading }
}
