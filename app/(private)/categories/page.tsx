import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Categories from '@/templates/category-table'
import { getServerSession } from 'next-auth'
export default async function CategoryPage() {
    const session = await getServerSession(authOptions)

    if (session && session.user.role != 'admin'){
        return <></>
    }
    return <div className='w-full'>
       <Categories/>
        {/* { categories && categories.map((cat) => <CategoryCard key={cat.id} category={cat}/>)} */}
    </div>
}