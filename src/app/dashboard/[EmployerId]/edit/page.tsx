// "use client";
import UpdateEmployerSlice from "@/_components/UpdateEmployer";
import { GetEmployerById } from "@/_services/GetEmployers";
import { Employer } from "@/_services/Interfaces";
import React from "react";
interface Props {
  params: {
    EmployerId: number;
  };
}

async function page({ params }: Props) {
  return <UpdateEmployerSlice employerId={params.EmployerId} />;
}

export default page;
