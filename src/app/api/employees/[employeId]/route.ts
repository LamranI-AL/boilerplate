import connectDb from "@/_db/db";
import { Employer } from "@/interfaces/Interfaces";
import Employes from "@/models/Employes";
import { NextRequest, NextResponse } from "next/server";
interface Props {
  params: {
    employeId: string;
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
    const { employeId } = params;
    if (!employeId) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    const newEmployeeUpdated: Partial<Employer> = await req.json();
    if (!newEmployeeUpdated) {
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }

    const updatedEmployee = await Employes.findByIdAndUpdate(
      employeId,
      newEmployeeUpdated,
      {
        new: true,
      }
    );

    if (!updatedEmployee) {
      return NextResponse.json({
        message: "Employé non trouvé",
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
    const { employeId } = params;

    const deletedEmployee = await Employes.findByIdAndDelete(employeId);

    if (!deletedEmployee) {
      return NextResponse.json({
        message: "Employé non trouvé",
        status: 404,
      });
    }

    return NextResponse.json(deletedEmployee);
  } catch (error) {
    console.error("Erreur lors de la suppression de l'employé :", error);
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
    const { employeId } = params;
    if (!employeId) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const Employee = await Employes.findById(employeId);
    if (!Employee) {
      return NextResponse.json(
        { message: "Employee not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(Employee);
  } catch (error) {
    console.error("Error retrieving Employee:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
