import UpdateCondidateSlice from "@/_components/UpdateCondidate";
import { Session } from "@/interfaces/Interfaces";
import { getServerSession } from "next-auth";
import React from "react";
interface Props {
  params: {
    CondidatId: string;
  };
}
async function page({ params }: Props) {
  const session: Session | any = await getServerSession();
  return (
    <UpdateCondidateSlice CondidatId={params.CondidatId} session={session} />
  );
}

export default page;
