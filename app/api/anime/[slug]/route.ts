import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  const url = `${process.env.ANIME_API}/info/${params.slug}`;

  try {
    const data = await fetch(url).then((res) => res.json());
    if (!data) return NextResponse.json({ data: null });
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ url }, { status: 500 });
  }
}
