import EmployeeList from "@/_components/EmployersList";
import { GetCondidates } from "@/_services/GetCondidats";
import { Condidate } from "@/interfaces/Interfaces";
import React from "react";

async function page() {
  const condidats: Condidate[] = await GetCondidates();

  const condidateRetenus = condidats.filter(
    (condidate) =>
      condidate.isSucceeded === true && condidate.isArchived === false
  );
  return (
    <div>
      <EmployeeList
        newPostesNonRep={[]}
        condidats={condidateRetenus}
        employers={[]}
      />
    </div>
  );
}

export default page;
