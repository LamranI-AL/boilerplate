import EmployeeList from "@/_components/EmployersList";
import React from "react";
import Aside from "../_components/Aside";
import { GetEmployers } from "@/_services/GetEmployers";
import { Employer } from "@/_services/Interfaces";

async function ActiveEmployersPage() {
  const employers = await GetEmployers();
  // filter les ouvier qui en isRejected false et isArchived false pour que trouve just les ouvier active en societe
  const employersActive = employers.filter(
    (employer: Employer) =>
      employer.isRejected === false && employer.isArchive === false
  );
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <Aside />
      <div className="h-32 rounded-lg lg:col-span-2">
        <EmployeeList employers={employersActive} />
      </div>
    </div>
  );
}

export default ActiveEmployersPage;
