// "use client";
import UpdateEmployerSlice from "@/_components/UpdateEmployer";
import { GetEmployerById } from "@/_services/GetEmployers";
import { Employer } from "@/_services/Interfaces";
import React from "react";
import EmployerCard from "../../_components/EmployerCard";
interface Props {
  params: {
    EmployerId: number;
  };
}

async function page({ params }: Props) {
  console.log(params.EmployerId);
  const ouvrier: Employer = await GetEmployerById(params.EmployerId.toString());
  return (
    <div>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <EmployerCard employer={ouvrier} />
            </div>

            <div className="rounded-lg  lg:col-span-3 ">
              <UpdateEmployerSlice employerId={params.EmployerId} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
