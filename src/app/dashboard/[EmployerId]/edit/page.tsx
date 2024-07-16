// "use client";
import UpdateEmployerSlice from "@/_components/UpdateEmployer";
import { auth } from "@/auth";
import React from "react";
interface Props {
  params: {
    EmployerId: number;
  };
}

async function page({ params }: Props) {
  const session = await auth();
  return (
    <UpdateEmployerSlice employerId={params.EmployerId} session={session} />
  );
}

export default page;
