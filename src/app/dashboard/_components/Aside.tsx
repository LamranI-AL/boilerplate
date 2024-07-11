import React from "react";
import UserSlice from "./UserSlice";
import Link from "next/link";
import { Counter } from "@/_services/Interfaces";
import { GetCountActiveAndArchiveEmployer } from "@/_services/GetAggrigationParams";

export default async function Aside() {
  const count: Counter[] = await GetCountActiveAndArchiveEmployer();
  const activeCount: Counter[] = count.filter((item) => item._id === false);
  const archiveCount: Counter[] = count.filter((item) => item._id === true);
  return (
    <div className="h-12 rounded-lg bg-gray-200">
      <div className="flex h-screen flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <ul className="mt-6 space-y-1">
            <li>
              <div className="block  bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                categories des ouvriers
              </div>
            </li>
            <Link href="/dashboard/ouvriers-archive " className="my-3">
              <li className="flex py-2  rounded-lg px-4 focus:bg-black text-sm font-medium text-cyan-700 hover:bg-gray-100 hover:text-cyan-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 mx-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
                Archive
                <p className="font-bold text-yellow-700 mx-4">
                  ({archiveCount[0].count})
                </p>
              </li>
            </Link>
            <Link href="/dashboard " className="my-3">
              <li className="flex py-2  rounded-lg px-4 focus:bg-black text-sm font-medium text-cyan-700 hover:bg-gray-100 hover:text-cyan-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 mx-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                retourn
                <p className="font-bold text-yellow-700 mx-4">
                  ({activeCount[0].count})
                </p>
              </li>
            </Link>
          </ul>
        </div>

        {/* <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <UserSlice />
        </div> */}
      </div>
    </div>
  );
}
