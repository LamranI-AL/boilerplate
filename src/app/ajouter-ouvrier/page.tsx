// import AddOuvrierForm from "./../../_components/AddOuvrierForm";
import AddOuvrier from "@/_components/AddOuvrier";
import { auth } from "@/auth";
import React from "react";

async function AddOuvrierPage() {
  const session = await auth();
  return (
    <div>
      <AddOuvrier />
    </div>
  );
}

export default AddOuvrierPage;
