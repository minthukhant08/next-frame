import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import Image from "next/image"
export type CatgegoryProp = {
    className?: string,
    category: Category
}

export default function CategoryCard({ className, category }: CatgegoryProp) {
    return <>
        <Card>
            <CardHeader>
                <CardTitle>{ category.name }</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={category.image} unoptimized alt="cat image" width={100} height={100}/>
            </CardContent>
        </Card>
    </>
}