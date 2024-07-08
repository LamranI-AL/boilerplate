// components/EmployeeList.tsx
import React from "react";
import EmployeeSlice from "./EmployeeSlice";
import { GetEmployers } from "@/_services/GetEmployers";
import { Employer } from "@/_services/Interfaces";
interface Props {
  employers: Employer[];
}
const EmployeeList = ({ employers }: Props) => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Liste des Ouvriers</h1>
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Nom
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Prénom
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

        <tbody className="divide-y divide-gray-200">
          {employers.map((ouvrier: Employer) => (
            <EmployeeSlice employer={ouvrier} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
