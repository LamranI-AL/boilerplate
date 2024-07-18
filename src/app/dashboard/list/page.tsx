import EmployeeList from "@/_components/EmployersList";
import StatistiqueCounterOfActiveEmployee from "@/_components/StatistiqueCounterOfActiveEmployee";
import { GetEmployers } from "@/_services/GetEmployers";
import { Employer } from "@/_services/Interfaces";
import React from "react";

async function page() {
  const employers = await GetEmployers();
  const employersActive = employers.filter(
    (employer: Employer) =>
      employer.isRejected === false && employer.isArchive === false
  );
  return (
    <div>
      <StatistiqueCounterOfActiveEmployee isActive={true} />
      <EmployeeList employers={employersActive} condidats={[]} />
    </div>
  );
}

export default page;
