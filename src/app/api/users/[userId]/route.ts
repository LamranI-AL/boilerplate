import connectDb from "@/_db/db";
import { User } from "@/interfaces/Interfaces";
import UserModel from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";
interface Props {
  params: {
    userId: string;
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
    const { userId } = params;
    if (!userId) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    const newUserUpdated: Partial<User> = await req.json();
    if (!newUserUpdated) {
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      newUserUpdated,
      {
        new: true,
      }
    );

    if (!updatedUser) {
      return NextResponse.json({
        message: "user non trouvé",
        status: 404,
      });
    }

    return NextResponse.json(updatedUser);
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
    const { userId } = params;

    const deletedUser = await UserModel.findByIdAndDelete(userId);

    if (!deletedUser) {
      return NextResponse.json({
        message: "user non trouvé",
        status: 404,
      });
    }

    return NextResponse.json(deletedUser);
  } catch (error) {
    console.error("Erreur lors de la suppression de user :", error);
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
    const { userId } = params;
    if (!userId) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const Employee = await UserModel.findById(userId);
    if (!Employee) {
      return NextResponse.json({ message: "user not found" }, { status: 404 });
    }

    return NextResponse.json(Employee);
  } catch (error) {
    console.error("Error retrieving user:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
