import UpdateEmployerSlice from "@/_components/UpdateEmployer";
import { Session } from "@/interfaces/Interfaces";
import { getServerSession } from "next-auth";
import React from "react";
interface Props {
  params: {
    EmployerId: number;
  };
}

async function page({ params }: Props) {
  const session: Session | any = await getServerSession();
  return (
    <UpdateEmployerSlice employerId={params.EmployerId} session={session} />
  );
}

export default page;
