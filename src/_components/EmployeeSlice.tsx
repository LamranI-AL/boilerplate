"use client";
import { formatDate } from "@/app/_utils/formatDate";
import { Employer } from "@/interfaces/Interfaces";
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
  const date = new Date(employer.dateNaissance).toLocaleDateString().toString();
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
        {formatDate(employer.dateNaissance)}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {employer.posteName}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {employer.phoneNumber}
      </td>
      <td className="whitespace-nowrap flex gap-3 px-4 py-2 ">
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
          <div className="mt-4 flex flex-wrap gap-1">
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              admin : {employer.UserDelete}
            </span>
          </div>
        )}
      </td>
    </tr>
  );
};

export default EmployesList;
