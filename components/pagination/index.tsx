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
import { useSearchParams } from "next/navigation"


export type PaginationType = {
  total: number
  baseUrl: string
}

const getParam = (value: string | null, defaultValue: number) => {
  const parsed = Number(value);
  return Number.isNaN(parsed) ? defaultValue : parsed;
};

export function PaginationComponent( { total, baseUrl } : PaginationType) {
  const searchparam = useSearchParams();
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
          <PaginationLink isActive={Number(page) == (index+1)} href={baseUrl + "?page=" + (index + 1) + "&limit=" + limit + "&search=" + (search ?? '') }>{index + 1}</PaginationLink>
        </PaginationItem>
          })
        } 
        
      </PaginationContent>
    </Pagination>
  )
}
