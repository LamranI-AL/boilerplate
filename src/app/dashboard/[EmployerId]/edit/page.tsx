// "use client";
import UpdateEmployerSlice from "@/_components/UpdateEmployer";
import { auth } from "@/auth";
import { Session } from "@/interfaces/Interfaces";
import React from "react";
interface Props {
  params: {
    EmployerId: number;
  };
}

async function page({ params }: Props) {
  const session: Session | any = await auth();
  return (
    <UpdateEmployerSlice employerId={params.EmployerId} session={session} />
  );
}

export default page;
