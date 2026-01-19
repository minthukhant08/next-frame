import { instanceWithAuth as axios } from "@/api"
import routes from "./routes"
import route from "../auth/route"
import { all } from "axios"

export default {
    all: () => axios.get<HTTPResponse<Category[]>>(routes.all) ,
    find: (id: number)=> axios.get(routes.find + "/" + id),
    store: (cagtegory : Omit<Category, 'id'>) => axios.post(routes.store, cagtegory) ,
    update: (cagtegory : Category) => axios.put(routes.update + "/" + cagtegory.id, cagtegory),
    delete: (id: number)=> axios.delete(routes.delete + id)
}