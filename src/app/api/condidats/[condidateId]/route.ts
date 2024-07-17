import connectDb from "@/_db/db";
import { Condidate } from "@/_services/Interfaces";
import Condidats from "@/models/Condidats";
import { NextRequest, NextResponse } from "next/server";
interface Props {
  params: {
    condidateId: string;
  };
}
// update one
export async function PUT(req: NextRequest, { params }: Props) {
  try {
    await connectDb();
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      { message: "Error connecting to the database" },
      { status: 500 }
    );
  }
  try {
    const { condidateId } = params;
    if (!condidateId) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    const newCondidateUpdated: Partial<Condidate> = await req.json();
    if (!newCondidateUpdated) {
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }

    const updatedEmployee = await Condidats.findByIdAndUpdate(
      condidateId,
      newCondidateUpdated,
      {
        new: true,
      }
    );

    if (!updatedEmployee) {
      return NextResponse.json({
        message: "condidate non trouvé",
        status: 404,
      });
    }

    return NextResponse.json(updatedEmployee);
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'employé :", error);
    return NextResponse.json({
      message: "Erreur lors de la requête",
      error: error instanceof Error ? error.message : "Erreur inconnue",
      status: 500,
    });
  }
}
// delete one
export async function DELETE(req: NextRequest, { params }: Props) {
  try {
    await connectDb();
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error connecting to the database" },
      { status: 500 }
    );
  }
  try {
    const { condidateId } = params;

    const deletedEmployee = await Condidats.findByIdAndDelete(condidateId);

    if (!deletedEmployee) {
      return NextResponse.json({
        message: "condidate non trouvé",
        status: 404,
      });
    }

    return NextResponse.json(deletedEmployee);
  } catch (error) {
    console.error("Erreur lors de la suppression de condiate :", error);
    return NextResponse.json({
      message: "Erreur lors de la requête",
      error: error instanceof Error ? error.message : "Erreur inconnue",
      status: 500,
    });
  }
}
// get one
export async function GET(request: NextRequest, { params }: Props) {
  try {
    await connectDb();
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error connecting to the database" },
      { status: 500 }
    );
  }
  try {
    const { condidateId } = params;
    if (!condidateId) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const Employee = await Condidats.findById(condidateId);
    if (!Employee) {
      return NextResponse.json(
        { message: "condidate not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(Employee);
  } catch (error) {
    console.error("Error retrieving condidate:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
