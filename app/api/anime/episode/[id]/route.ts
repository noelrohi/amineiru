import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const searchParams = req.nextUrl.searchParams;
  const server = searchParams.get("server") || "gogocdn";
  const url = `${process.env.ANIME_API}/watch/${params.id}?server=${server}`;

  try {
    const data = await fetch(url).then((res) => res.json());
    if (!data) return NextResponse.json({ data: null });
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ url }, { status: 500 });
  }
}
