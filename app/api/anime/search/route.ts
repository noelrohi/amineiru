import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const page = searchParams.get("page") || 1;
  const query = searchParams.get("query");
  const url = `${process.env.ANIME_API}/${query}?page=${page}`;

  try {
    const data = await fetch(url).then((res) => res.json());
    if (!data) return NextResponse.json({ data: null });
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ url }, { status: 500 });
  }
}
