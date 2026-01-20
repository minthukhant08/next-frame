import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
export default function ProductsTemplate () {
    return <DataTable columns={columns} data={[]}/>
}