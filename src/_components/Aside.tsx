// "use client";
// import { GetCountActiveAndArchiveEmployer } from "@/_services/GetAggrigationParams";
// import { Counter } from "@/_services/Interfaces";
import { GetCountActiveAndArchiveEmployer } from "@/_services/GetAggrigationParams";
import { Counter } from "@/interfaces/Interfaces";
import {
  Archive,
  SeparatorHorizontalIcon,
  UserCheck,
  UserPlus,
  UserRoundX,
} from "lucide-react";
import Link from "next/link";
import React from "react";
interface Props {
  type: string;
}
async function Aside({ type }: Props) {
  const count: Counter[] = await GetCountActiveAndArchiveEmployer();
  let activeCount: Counter[] = [];
  let archiveCount: Counter[] = [];
  if (count.length !== 0) {
    activeCount = count.filter((item) => item._id === false);
    archiveCount = count.filter((item) => item._id === true);
  }

  let abv = "";
  if (type === "ouvrier") {
    abv = "OUV";
  } else if (type === "condidate") {
    abv = "CON";
  }
  return (
    <div>
      <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
        <div>
          <div className="inline-flex size-16 items-center justify-center">
            <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
              {abv}
            </span>
          </div>

          <div className="border-t border-gray-100">
            <div className="px-2">
              <ul className="space-y-1 border-t border-gray-100 pt-4">
                <li>
                  {/* ADD */}
                  {type === "ouvrier" ? (
                    <Link
                      href="/ajouter-ouvrier"
                      className="group relative flex justify-center rounded px-2 py-1.5 text-cyan-900 hover:bg-gray-50 hover:text-gray-700"
                    >
                      <UserPlus />
                      <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                        ajouter {type}
                      </span>
                    </Link>
                  ) : (
                    <Link
                      href="/ajouter-condidate"
                      className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                      <UserPlus />
                      <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                        ajouter {type}
                      </span>
                    </Link>
                  )}
                </li>
                <li>
                  {/* active / retenus */}
                  {type === "ouvrier" ? (
                    <Link
                      href="/dashboard/list"
                      className="group relative flex justify-center rounded px-2 py-1.5 text-green-900 hover:bg-gray-50 hover:text-gray-700"
                    >
                      <UserCheck />

                      <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                        ouvrier Actives
                        {activeCount.length !== 0 && (
                          <p className="font-bold text-yellow-700 mx-4">
                            ({activeCount[0].count})
                          </p>
                        )}
                      </span>
                    </Link>
                  ) : (
                    <Link
                      href="/condidats/list"
                      className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>

                      <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                        condidate retenus
                      </span>
                    </Link>
                  )}
                </li>
                <li>
                  <SeparatorHorizontalIcon className="text-gray-400 items-center content-center mx-3 my-5" />
                  {/* archive / non retenus */}
                  {type === "ouvrier" ? (
                    <Link
                      href="/dashboard/ouvriers-archive"
                      className="group relative flex justify-center  rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                      <Archive className="text-cyan-800" />

                      <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                        ouvrier Archiver
                        {archiveCount.length !== 0 && (
                          <p className="font-bold text-yellow-700 mx-4">
                            ({archiveCount[0].count})
                          </p>
                        )}
                      </span>
                    </Link>
                  ) : (
                    <Link
                      href="/condidats/non-retenus"
                      className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>

                      <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                        condidate non retenus
                      </span>
                    </Link>
                  )}
                </li>
                <li>
                  {/* black list / archive */}
                  {type === "ouvrier" ? (
                    <Link
                      href="/dashboard/black-list"
                      className="group relative flex justify-center  rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                      <UserRoundX className="text-sm text-red-800" />

                      <span className="invisible absolute start-full text-red-500 top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium  group-hover:visible">
                        List Noie
                      </span>
                    </Link>
                  ) : (
                    <Link
                      href="/condidats/archived-list-reembauchees"
                      className="group relative flex justify-center  rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                      <Archive className="text-sm text-gray-600" />

                      <span className="invisible absolute start-full text-white top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium  group-hover:visible">
                        archive
                      </span>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aside;
