import EmployeeList from "@/_components/EmployersList";
import StatistiqueCounterOfActiveEmployee from "@/_components/StatistiqueCounterOfActiveEmployee";
import { GetEmployers } from "@/_services/GetEmployers";
import { Employer, Poste } from "@/interfaces/Interfaces";
import React from "react";
import { GetPosts } from "@/_services/GetPosts";

async function page() {
  const postes: Poste[] = await GetPosts();
  const newPostesNonRep: string[] = enleverValeursRepetees(
    postes.map((p) => p.name)
  );
  function enleverValeursRepetees<T>(tableau: T[]): T[] {
    const tableauUnique: T[] = [];
    for (const valeur of tableau) {
      if (!tableauUnique.includes(valeur)) {
        tableauUnique.push(valeur);
      }
    }
    return tableauUnique;
  }
  let employers: Employer[] = await GetEmployers();
  let employersActive: Employer[] = [];
  if (employers.length !== 0) {
    employersActive = employers.filter(
      (employer: Employer) =>
        employer.isRejected === false && employer.isArchive === false
    );
  }
  return (
    <div>
      <StatistiqueCounterOfActiveEmployee isActive={true} />
      <EmployeeList
        newPostesNonRep={newPostesNonRep}
        employers={employersActive}
        condidats={[]}
      />
    </div>
  );
}

export default page;
