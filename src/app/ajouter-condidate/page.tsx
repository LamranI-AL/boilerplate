import AddCondidate from "@/_components/addCondidat";
import { auth } from "@/auth";
import { Sanction } from "@/interfaces/Interfaces";
import React from "react";

async function page() {
  const session: Sanction | any = await auth();
  return (
    <div className="">
      <AddCondidate session={session} />
    </div>
  );
}

export default page;
