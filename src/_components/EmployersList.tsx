// components/EmployeeList.tsx
// "use client";
import React from "react";
import EmployeeSlice from "./EmployeeSlice";
import { Condidate, Employer } from "@/_services/Interfaces";
import CondidateSlice from "./condidate-slice";
interface Props {
  employers: Employer[];
  condidats: Condidate[];
}
const EmployeeList = async ({ employers, condidats }: Props) => {
  return (
    <div className="container mx-auto mt-10 ">
      {employers.length === 0 ? (
        <h1 className="text-2xl font-bold mb-5">Liste des Condidats</h1>
      ) : (
        <h1 className="text-2xl font-bold mb-5">Liste des Ouvriers</h1>
      )}

      {/* <Search /> */}
      <table className="min-w-full divide-y-2 divide-gray-200 my-2 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Prénom
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Nom
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              CIN
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Date de Naissance
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Numéro de Téléphone
            </th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        {employers.length === 0 ? (
          <tbody className="divide-y divide-gray-200">
            {condidats.map((condidate: Condidate, key) => (
              <CondidateSlice
                key={key}
                condidate={condidate}
                isSucess={!condidate.isSucceeded}
              />
            ))}
          </tbody>
        ) : (
          <tbody className="divide-y divide-gray-200">
            {employers.map((ouvrier: Employer, key) => (
              <EmployeeSlice
                key={key}
                employer={ouvrier}
                isActive={!ouvrier.isRejected}
              />
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default EmployeeList;
