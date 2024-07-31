import EmployeeList from "@/_components/EmployersList";
import { GetCondidates } from "@/_services/GetCondidats";
import { Condidate } from "@/interfaces/Interfaces";
import React from "react";

async function page() {
  const condidates: Condidate[] = await GetCondidates();
  const condidateNonRetenus = condidates.filter(
    (condidate) => condidate.isSucceeded === false
  );

  return (
    <div>
      <EmployeeList
        condidats={condidateNonRetenus}
        employers={[]}
        newPostesNonRep={[]}
      />
    </div>
  );
}

export default page;
