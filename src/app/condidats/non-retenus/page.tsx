import EmployeeList from "@/_components/EmployersList";
import { GetCondidates } from "@/_services/GetCondidats";
import { Condidate } from "@/_services/Interfaces";
import React from "react";

async function page() {
  const condidates: Condidate[] = await GetCondidates();
  const condidateNonRetenus = condidates.filter(
    (condidate) => condidate.isSucceeded === false
  );

  return (
    <div>
      <EmployeeList condidats={condidateNonRetenus} employers={[]} />
    </div>
  );
}

export default page;
