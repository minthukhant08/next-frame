'use server'

import catAPI from '@/api/categories'


export const getAllCategories = async () => {
    const res = await catAPI.all();
    return res.data.data
}

export const deleteCategory = async (id :number ) => {
   return await catAPI.delete(id)
}

export const createCategory = async ( category: Omit<Category, 'id'>) => {
   const res = await catAPI.store(category)
   return res.data
}