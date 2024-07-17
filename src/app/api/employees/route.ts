import connectDb from "@/_db/db";
import { Employer } from "@/_services/Interfaces";
import Employes from "@/models/Employes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    await connectDb();
    // get data form Employees collection
    const employees: Employer[] = await Employes.find();
    return NextResponse.json(employees);
  } catch (error) {
    console.error("Erreur lors de la récupération des employés :", error);
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
    const requestData: Employer = await req.json();
    // new one
    const newEmployee = new Employes(requestData);
    await newEmployee.save();
    // msg d confirmation
    return NextResponse.json(newEmployee);
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'employé :", error);
    // eror cas :
    return NextResponse.json({
      message: "Erreur lors de la requête",
      error: error instanceof Error ? error.message : "Erreur inconnue",
      status: 500,
    });
  }
}
