import connectDb from "@/_db/db";
import { Condidate } from "@/interfaces/Interfaces";
import Condidats from "@/models/Condidats";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    await connectDb();
    // get data form Employees collection
    const Condidates: Condidate[] = await Condidats.find();
    return NextResponse.json(Condidates);
  } catch (error) {
    console.error("Erreur lors de la récupération des condidats :", error);
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
    const requestData: Condidate = await req.json();
    // new one
    const newCondidate = new Condidats(requestData);
    await newCondidate.save();
    // msg d confirmation
    return NextResponse.json(newCondidate);
  } catch (error) {
    console.error("Erreur lors de l'ajout de condidate :", error);
    // eror cas :
    return NextResponse.json({
      message: "Erreur lors de la requête",
      error: error instanceof Error ? error.message : "Erreur inconnue",
      status: 500,
    });
  }
}
