import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import ProductDialog from "./product-dialog";

type ProductsTemplateProp = {
    products: Product[]
}
export default function ProductsTemplate ( { products } : ProductsTemplateProp ) {
    return <div>
        <ProductDialog/>
        <DataTable columns={columns} data={products}/>
    </div>
}