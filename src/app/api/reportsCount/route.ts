import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "@/_db/db";
import Employes from "@/models/Employes";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectDb();

    const pipeline = [
      {
        $group: {
          _id: "$isRejected",
          count: { $sum: 1 },
        },
      },
    ];

    const report = await Employes.aggregate(pipeline);

    return NextResponse.json(report);
  } catch (error) {
    console.error("Erreur lors de la récupération des employés :", error);

    return res.status(500).json({
      message: "Erreur lors de la requête",
      error: error instanceof Error ? error.message : "Erreur inconnue",
    });
  }
}
