import connectDb from "@/_db/db";
import { Sanction } from "@/interfaces/Interfaces";
import Sanctions from "@/models/Sanctions";
import { NextRequest, NextResponse } from "next/server";
interface Props {
  params: {
    sanctionId: string;
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
    const { sanctionId } = params;
    if (!sanctionId) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    const newSanctionUpdated: Partial<Sanction> = await req.json();
    if (!newSanctionUpdated) {
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }

    const updatedSanction = await Sanctions.findByIdAndUpdate(
      sanctionId,
      newSanctionUpdated,
      {
        new: true,
      }
    );

    if (!updatedSanction) {
      return NextResponse.json({
        message: "condidate non trouvé",
        status: 404,
      });
    }

    return NextResponse.json(updatedSanction);
  } catch (error) {
    console.error("Erreur lors de la mise à jour de sanction :", error);
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
    const { sanctionId } = params;

    const deletedSanction = await Sanctions.findByIdAndDelete(sanctionId);

    if (!deletedSanction) {
      return NextResponse.json({
        message: "condidate non trouvé",
        status: 404,
      });
    }

    return NextResponse.json(deletedSanction);
  } catch (error) {
    console.error("Erreur lors de la suppression de sanction :", error);
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
    const { sanctionId } = params;
    if (!sanctionId) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const Sanction = await Sanctions.find({
      EmployerId: sanctionId,
    });
    if (!Sanction) {
      return NextResponse.json(
        { message: "condidate not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(Sanction);
  } catch (error) {
    console.error("Error retrieving Sanction:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
