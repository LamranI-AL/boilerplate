import UpdateCondidateSlice from "@/_components/UpdateCondidate";
import { auth } from "@/auth";
import React from "react";
interface Props {
  params: {
    CondidatId: string;
  };
}
async function page({ params }: Props) {
  const session = await auth();
  console.log(params.CondidatId);
  console.log(typeof params.CondidatId);
  return (
    // <div className="container">edit page</div>
    <UpdateCondidateSlice CondidatId={params.CondidatId} session={session} />
  );
}

export default page;
