import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import axios from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const instance = axios.create({
    baseURL: process.env.BASE_URL + "/api"
})

export const instanceWithAuth = axios.create({
    baseURL: process.env.BASE_URL + "/api"
})

instanceWithAuth.interceptors.request.use(async (config) => {
    const session = await getServerSession(authOptions)
    if (session) {
        config.headers.Authorization = `Bearer ` + session.user.accessToken
    }
    return config
})

instanceWithAuth.interceptors.response.use(async (response) => {
    if(response.status == 401){
        redirect("/signout")
    }
    console.log('response...', response)
    return response
}, async (error) => {
        console.log(error, 're.........')
    if (error.response.status == 401) {
        redirect("/signout")
    }
})

export default instance