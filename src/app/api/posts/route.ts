import connectDb from "@/_db/db";
import { Poste } from "@/_services/Interfaces";
import Posts from "@/models/Posts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    await connectDb();
    // get data form Employees collection
    const Postes: Poste[] = await Posts.find();
    return NextResponse.json(Postes);
  } catch (error) {
    console.error("Erreur lors de la récupération des Postes :", error);
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
    const requestData: Poste = await req.json();
    // new one
    const newPoste = new Posts(requestData);
    await newPoste.save();
    // msg d confirmation
    return NextResponse.json(newPoste);
  } catch (error) {
    console.error("Erreur lors de l'ajout de Poste :", error);
    // eror cas :
    return NextResponse.json({
      message: "Erreur lors de la requête",
      error: error instanceof Error ? error.message : "Erreur inconnue",
      status: 500,
    });
  }
}
