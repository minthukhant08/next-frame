'use client'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useSearchParams, usePathname } from "next/navigation"
import { useRouter } from "next/navigation"


export type PaginationType = {
  total: number,
}

export function PaginationComponent( { total } : PaginationType) {
  const router = useRouter()
  const searchParams = useSearchParams();
  const parsedParams = Object.fromEntries(
  Array.from(searchParams.entries()).map(([key, value]) => {
    const num = Number(value)
    return [key, isNaN(num) ? value : num]
  })
) 

  const pathname = usePathname();
  const limit = (parsedParams.limit as number) || 5
  const currentPage = (parsedParams.page as number) || 1
  const pages = Math.ceil(total / limit)
  return (
    <Pagination>
      <PaginationContent>
        {
          Array.from({ length: pages }).map((_, index)=> {
            const params = new URLSearchParams(searchParams.toString())
            const page = index + 1
            params.set('page', String(page))
            return <PaginationItem key={index}>
          <PaginationLink isActive={currentPage === page}
                href={`#`} onClick={() => router.push(`${pathname}?${params.toString()}`)}>{index + 1}</PaginationLink>
        </PaginationItem>
          })
        } 
      </PaginationContent>
    </Pagination>
  )
}
