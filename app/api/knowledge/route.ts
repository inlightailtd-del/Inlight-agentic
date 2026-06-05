import { NextResponse }
from "next/server";

const knowledge: any[] = [];

export async function GET() {

  return NextResponse.json(
    knowledge
  );
}

export async function POST(
  request: Request
) {

  const body =
    await request.json();

  knowledge.push(body);

  return NextResponse.json({
    success: true,
  });
}