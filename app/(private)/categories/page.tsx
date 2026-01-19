import Categories from '@/templates/category-table'
export default async function CategoryPage() {

    return <div className='w-full'>
       <Categories/>
        {/* { categories && categories.map((cat) => <CategoryCard key={cat.id} category={cat}/>)} */}
    </div>
}