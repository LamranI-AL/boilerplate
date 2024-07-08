import EmployeeList from "@/_components/EmployersList";
import { GetEmployers } from "@/_services/GetEmployers";
import { Employer } from "@/_services/Interfaces";
import React from "react";
import Aside from "./_components/Aside";

export default async function Dashboard() {
  const employers = await GetEmployers();
  // filter les ouvier qui en isRejected false et isArchived false pour que trouve just les ouvier active en societe
  const employersActive = employers.filter(
    (employer: Employer) =>
      employer.isRejected === false && employer.isArchive === false
  );
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div className="">
        <Aside />
      </div>

      <div className="h-32 rounded-lg lg:col-span-2">
        <EmployeeList employers={employersActive} />
      </div>
    </div>
  );
}
