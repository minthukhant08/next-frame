import ProductsTemplate from "@/templates/products";
import { getAllProducts } from "@/templates/products/actions";
export default async function ProductsPage() {
    const products = await getAllProducts();
    return <div>
        <ProductsTemplate products={products}/>
    </div>
}