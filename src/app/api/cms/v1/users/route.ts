import { NB_ITEMS_PER_PAGE } from "@/constants/cms/crudConstants";
import prisma from "@/lib/db";
import { SEARCH_PARAM } from "@/types/api";
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  let pageQuery: SEARCH_PARAM = searchParams.get('page')

  let page: number = 1;
  if (!pageQuery || (pageQuery && parseInt(pageQuery) < 1)) {
    page = 1;
  } else {
    page = parseInt(pageQuery)
  }

  const users = await prisma.user.findMany({
    skip: (page - 1) * NB_ITEMS_PER_PAGE,
    take: NB_ITEMS_PER_PAGE
  });

  return NextResponse.json({ data: users })
}
