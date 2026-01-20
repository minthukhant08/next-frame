import axios from "@/api"
import routes from '@/api/products/routes'
export default {
    all: () => axios.get<HTTPResponse<Product[]>>(routes.resource),
    create: ( product : Omit<Product, "id"> ) => axios.post<HTTPResponse<Product>>(routes.resource, product ),
    update: ( product: Product) => axios.put<HTTPResponse<Product>>(routes.resource + "/" + product.id, product ),
    delete: (id : string) => axios.delete<HTTPResponse<Product>>(routes.resource + "/" + id )
}