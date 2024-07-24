import { Condidate } from "@/interfaces/Interfaces";
import Link from "next/link";
import React from "react";
interface EmployeeSliceProps {
  condidate: Condidate;
  isSucess: boolean;
}

function CondidateSlice({ condidate, isSucess }: EmployeeSliceProps) {
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {condidate.firstName}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {condidate.lastName.toUpperCase()}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {condidate.CIN}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {new Date(condidate.dateNaissance).toLocaleDateString()}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {condidate.posteApplique}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {condidate.phoneNumber}
      </td>
      <td className="whitespace-nowrap px-4 py-2 ">
        <Link
          className="group relative inline-flex items-center overflow-hidden rounded bg-zinc-700 px-6 py-2 text-white focus:outline-none focus:ring active:bg-zinc-500"
          href={`/condidats/${condidate._id}/view`}
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
      </td>
    </tr>
  );
}

export default CondidateSlice;
