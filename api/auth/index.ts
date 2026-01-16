import axios from "@/api"
import routes from "@/api/auth/route"

export default {
    login: (payload: LoginPayload) => axios.post(routes.login, payload),
    logout: () => axios.get("/auth/logout")
}



