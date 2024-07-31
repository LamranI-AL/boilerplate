import { GetSanctionByIdEmploye } from "@/_services/GetSanctions";
import { Employer, Sanction } from "@/interfaces/Interfaces";
import React from "react";
import SanctionCard from "./sanction-card";
interface Props {
  ouvrier: Employer;
}
async function SanctionList({ ouvrier }: Props) {
  const sanctions: Sanction[] = await GetSanctionByIdEmploye(ouvrier._id);
  console.log(sanctions);
  return (
    <div>
      {sanctions.length !== 0 && (
        <ul className="mt-8 grid gap-4 m-5 sm:grid-cols-2 lg:grid-cols-3">
          {sanctions.map((S) => {
            return <SanctionCard key={S._id} sanction={S} ouvrier={ouvrier} />;
          })}
        </ul>
      )}
      <div className="text-green-500 text-center font-bold ">
        pas de sanctions a ce monsieur
      </div>
    </div>
  );
}

export default SanctionList;
