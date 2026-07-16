import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      return NextResponse.json(
        {
          success: false,
          message: "Nastavitev pošiljanja sporočil ni na voljo.",
        },
        { status: 500 },
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(
        {
          ...body,
          apikey: accessKey,
          subject: body.subject || "Nov obrazec na spletni strani",
          from_name: body.from_name || "FizioLuma Obrazec",
        },
        null,
        2,
      ),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return NextResponse.json(
        {
          success: false,
          message: data.message || "Sporočila ni bilo mogoče poslati.",
        },
        { status: response.status },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: data.message || "Sporočilo je bilo uspešno poslano.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form submission failed", error);
    return NextResponse.json(
      {
        success: false,
        message: "Prišlo je do napake pri pošiljanju sporočila.",
      },
      { status: 500 },
    );
  }
}
