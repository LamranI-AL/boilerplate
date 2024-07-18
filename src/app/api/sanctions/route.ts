import connectDb from "@/_db/db";
import { Sanction } from "@/_services/Interfaces";
import Sanctions from "@/models/Sanctions";
// import { Condidate } from "@/_services/Interfaces";
// import Condidats from "@/models/Condidats";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    await connectDb();
    // get data form Employees collection
    const sanctions: Sanction[] = await Sanctions.find();
    return NextResponse.json(sanctions);
  } catch (error) {
    console.error("Erreur lors de la récupération des sanctions :", error);
    return NextResponse.json({
      message: "Erreur lors de la requête",
      error: error instanceof Error ? error.message : "Erreur inconnue",
      status: 500,
    });
  }
}
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // Connexion au db
    await connectDb();
    const requestData: Sanction = await req.json();
    // new one
    const newSanction = new Sanctions(requestData);
    await newSanction.save();
    // msg d confirmation
    return NextResponse.json(newSanction);
  } catch (error) {
    console.error("Erreur lors de l'ajout de Sanction :", error);
    // eror cas :
    return NextResponse.json({
      message: "Erreur lors de la requête",
      error: error instanceof Error ? error.message : "Erreur inconnue",
      status: 500,
    });
  }
}
