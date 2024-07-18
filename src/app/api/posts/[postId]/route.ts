import connectDb from "@/_db/db";
import { Poste } from "@/_services/Interfaces";
import Posts from "@/models/Posts";
// import { Sanction } from "@/_services/Interfaces";
// import Sanctions from "@/models/Sanctions";
import { NextRequest, NextResponse } from "next/server";
interface Props {
  params: {
    postId: string;
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
    const { postId } = params;
    if (!postId) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    const newPostUpdated: Partial<Poste> = await req.json();
    if (!newPostUpdated) {
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }

    const updatedPoste = await Posts.findByIdAndUpdate(postId, newPostUpdated, {
      new: true,
    });

    if (!updatedPoste) {
      return NextResponse.json({
        message: "condidate non trouvé",
        status: 404,
      });
    }

    return NextResponse.json(updatedPoste);
  } catch (error) {
    console.error("Erreur lors de la mise à jour de poste :", error);
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
    const { postId } = params;

    const deletedPost = await Posts.findByIdAndDelete(postId);

    if (!deletedPost) {
      return NextResponse.json({
        message: "poste non trouvé",
        status: 404,
      });
    }

    return NextResponse.json(deletedPost);
  } catch (error) {
    console.error("Erreur lors de la suppression de post :", error);
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
    const { postId } = params;
    if (!postId) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const post = await Posts.find({
      EmployerId: postId,
    });
    if (!post) {
      return NextResponse.json({ message: "post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error retrieving post:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
