// "use client";
import { Employer } from "@/_services/Interfaces";
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
      <td className="whitespace-nowrap gap-3 px-4 py-2 ">
        <Link
          className="group relative inline-flex items-center overflow-hidden rounded bg-zinc-700 px-6 py-2 text-white focus:outline-none focus:ring active:bg-zinc-500"
          href={`/dashboard/${employer._id}/view`}
        >
          <span className="absolute -end-full transition-all group-hover:end-4">
            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span className="text-sm font-medium transition-all group-hover:me-4">
            {" "}
            Voir{" "}
          </span>
        </Link>
        {isActive === true ? (
          <Link
            className="group relative inline-flex items-center overflow-hidden rounded border border-current mx-3 px-6 py-2 text-red-800 focus:outline-none focus:ring active:text-red-700"
            href={`/dashboard/${employer._id}/delete`}
          >
            <span className="absolute -end-full transition-all group-hover:end-4">
              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:me-4">
              {" "}
              supprimer{" "}
            </span>
          </Link>
        ) : (
          <p>
            <strong>
              {employer.UserDelete.length === 0 ? "admin" : employer.UserDelete}
            </strong>{" "}
            qui me supprimer
          </p>
        )}
      </td>
    </tr>
  );
};

export default EmployesList;
