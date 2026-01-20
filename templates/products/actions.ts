'use server'
import productAPI from '@/api/products'

export const getAllProducts = async () => {
    try {
        const res = await productAPI.all()
        console.log(res, 'res....')
        return res.data.data
    } catch (error) {
        console.log(error, 'errr')
        return []        
    }
}