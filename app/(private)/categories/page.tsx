import catAPI from '@/api/categories'
import CategoryCard from '@/components/category-card'
import { toast } from 'react-toastify';

export default async function Categories() {

    const getCategories = async () =>{
        try {
            const res = await catAPI.all()
            return res.data.data
        } catch (error) {
            console.log(error)
            return []
        }
    }

    const categories = await getCategories()

   
    return <div className='grid gap-2 grid-cols-4'>
        { categories && categories.map((cat) => <CategoryCard key={cat.id} category={cat}/>)}
    </div>
}