import EmployeeList from "@/_components/EmployersList";
import { GetCondidates } from "@/_services/GetCondidats";
import { Condidate } from "@/_services/Interfaces";
import React from "react";

async function page() {
  const condidats: Condidate[] = await GetCondidates();

  const condidateRetenus = condidats.filter(
    (condidate) => condidate.isSucceeded === true
  );
  return (
    <div>
      <EmployeeList condidats={condidateRetenus} employers={[]} />
    </div>
  );
}

export default page;
