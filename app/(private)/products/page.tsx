import { getAllCategories } from "@/templates/category-table/actions";
import ProductsTemplate from "@/templates/products";
import { getAllProducts } from "@/templates/products/actions";

export default async function ProductsPage( { searchParams } : { searchParams: Promise<SearchParams> }) {
    const { page, limit, search } = await searchParams
    const products = await getAllProducts(`?page=${page ?? 1}&limit=${limit ??  5}&search=${search ?? ''}`);
    
    const categories = await getAllCategories();
    return <div>
        <ProductsTemplate products={products.data} totalProduct={products.total} categories={categories}/>
    </div>
}