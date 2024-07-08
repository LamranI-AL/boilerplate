// "use client";
import { Employer } from "@/_services/Interfaces";
import Link from "next/link";
import React from "react";

interface EmployeeSliceProps {
  employer: Employer;
}

const EmployesList: React.FC<EmployeeSliceProps> = ({
  employer,
}: EmployeeSliceProps) => {
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {employer.FerstName}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {employer.lastName}
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
          href={`/dashboard/${employer._id}/edit`}
          className="inline-block mx-1 rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          View
        </Link>
        <Link
          href={`/dashboard/${employer._id}/delete`}
          className="inline-block mx-1 rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
        >
          delete
        </Link>
      </td>
    </tr>
  );
};

export default EmployesList;
