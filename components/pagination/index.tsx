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


export type PaginationType = {
  total: number
}

const getParam = (value: string | null, defaultValue: number) => {
  const parsed = Number(value);
  return Number.isNaN(parsed) ? defaultValue : parsed;
};

export function PaginationComponent( { total } : PaginationType) {
  const searchparam = useSearchParams();
  const pathName = usePathname();
  const limit =  getParam(searchparam.get('limit'), 5)

  const page = searchparam.get('page')
  const pages = Math.ceil(total / limit);
  const search =  searchparam.get('search')
  return (
    <Pagination>
      <PaginationContent>
        {
          Array.from({ length: pages }).map((i, index)=> {
            return <PaginationItem key={index}>
          <PaginationLink isActive={Number(page) == (index+1)} href={pathName + "?page=" + (index + 1) + "&limit=" + limit + "&search=" + (search ?? '') }>{index + 1}</PaginationLink>
        </PaginationItem>
          })
        } 
        
      </PaginationContent>
    </Pagination>
  )
}
