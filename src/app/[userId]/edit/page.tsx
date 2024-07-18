import UpdateCondidateSlice from "@/_components/UpdateCondidate";
import { GetUserByID } from "@/_services/GetCurrentUser";
import { auth } from "@/auth";
import UpdateUserForm from "../_components/update-user";
// import { auth } from "@/auth";
// import React from "react";
interface Props {
  params: {
    userId: string;
  };
}
async function page({ params }: Props) {
  const session = await auth();
  const user = await GetUserByID(params.userId.toString());
  console.log(user);
  //   const session = await auth();
  //   console.log(params.userId);
  //   console.log(typeof params.userId);
  return (
    // <div>{JSON.stringify(params.userId)}</div>
    <UpdateUserForm currentUser={session?.user} user={user} />

    // <div className="container">edit page</div>
    // <UpdateCondidateSlice CondidatId={params.CondidatId} session={session} />
  );
}

export default page;
