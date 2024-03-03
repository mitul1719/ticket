import { NextResponse } from "next/server";
import Ticket from "../../(models)/Ticket";

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body;
    await Ticket.create(ticketData);

    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const allTickets = await Ticket.find({});

    return NextResponse.json({ ok: true, tickets: allTickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const allTickets = await Ticket.deleteMany({});

    return NextResponse.json({ ok: true, tickets: allTickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
