// "use client";
import { GetCountActiveAndArchiveEmployer } from "@/_services/GetAggrigationParams";
import { Counter, Employer } from "@/_services/Interfaces";
import Link from "next/link";
import React from "react";

interface EmployeeSliceProps {
  employer: Employer;
  isActive: boolean;
}

const EmployesList: React.FC<EmployeeSliceProps> = async ({
  employer,
  isActive,
}: EmployeeSliceProps) => {
  let currentStateOfEmployee = true;
  if (isActive === true) {
    currentStateOfEmployee = true;
  } else if (isActive === false) {
    currentStateOfEmployee = false;
  }
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {employer.FerstName}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {employer.lastName.toUpperCase()}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {employer.CIN}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {new Date(employer.dateNaissance).toLocaleDateString()}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {employer.phoneNumber}
      </td>
      <td className="whitespace-nowrap px-4 py-2 ">
        <Link
          href={`/dashboard/${employer._id}/view`}
          className="inline-block mx-1 rounded bg-indigo-900 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          voir
        </Link>
        {currentStateOfEmployee === true ? (
          <Link
            href={`/dashboard/${employer._id}/delete`}
            className="inline-block mx-1 rounded bg-red-900 px-4 py-2 text-xs font-medium text-gray-300 hover:bg-red-700"
          >
            supprimer
          </Link>
        ) : null}
      </td>
    </tr>
  );
};

export default EmployesList;
