type Product = {
    id?: number,
    name: string,
    description: string,
    price: number,
    image: string,
    category_id?: number,
    category_name?: string,
    status: "Active" | "Expired"
}