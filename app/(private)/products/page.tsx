import { getAllCategories } from "@/templates/category-table/actions";
import ProductsTemplate from "@/templates/products";
import { getAllProducts } from "@/templates/products/actions";

export default async function ProductsPage( { searchParams } : { searchParams: Promise<SearchParams> }) {
    const { page, limit, search } = await searchParams
    const products = await getAllProducts(`?page=${page}&limit=${limit}&search=${search}`);
    const categories = await getAllCategories();
    return <div>
        <ProductsTemplate products={products} categories={categories}/>
    </div>
}