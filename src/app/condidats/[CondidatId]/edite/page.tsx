import UpdateCondidateSlice from "@/_components/UpdateCondidate";
import { auth } from "@/auth";
import { Session } from "@/interfaces/Interfaces";
import React from "react";
interface Props {
  params: {
    CondidatId: string;
  };
}
async function page({ params }: Props) {
  const session: Session | any = await auth();
  return (
    <UpdateCondidateSlice CondidatId={params.CondidatId} session={session} />
  );
}

export default page;
