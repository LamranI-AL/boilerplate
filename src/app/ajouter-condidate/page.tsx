import AddCondidate from "@/_components/addCondidat";
import { auth } from "@/auth";
import React from "react";

async function page() {
  const session = await auth();
  return (
    <div className="">
      <AddCondidate session={session} />
    </div>
  );
}

export default page;
