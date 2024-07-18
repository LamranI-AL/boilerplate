import { GetSanctionByIdEmploye } from "@/_services/GetSanctions";
import { Employer, Sanction } from "@/_services/Interfaces";
import React from "react";
import SanctionCard from "./sanction-card";
interface Props {
  ouvrier: Employer;
}
async function SanctionList({ ouvrier }: Props) {
  const sanctions: Sanction[] = await GetSanctionByIdEmploye(ouvrier._id);
  return (
    <div>
      {sanctions.length !== 0 ? (
        <ul className="mt-8 grid gap-4 m-5 sm:grid-cols-2 lg:grid-cols-3">
          {sanctions.map((S) => {
            return <SanctionCard key={S._id} sanction={S} ouvrier={ouvrier} />;
          })}
        </ul>
      ) : (
        "no data"
      )}
    </div>
  );
}

export default SanctionList;
