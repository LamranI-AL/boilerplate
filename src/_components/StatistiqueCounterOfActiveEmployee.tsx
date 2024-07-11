import { GetCountActiveAndArchiveEmployer } from "@/_services/GetAggrigationParams";
import { Counter, Employer } from "@/_services/Interfaces";
import React from "react";
interface Props {
  isActive: boolean;
}
export default async function StatistiqueCounterOfActiveEmployee({
  isActive,
}: Props) {
  const count: Counter[] = await GetCountActiveAndArchiveEmployer();
  const activeCount: Counter[] = count.filter((item) => item._id === false);
  const archiveCount: Counter[] = count.filter((item) => item._id === true);
  let currentStateOfEmployee = true;
  if (isActive === true) {
    currentStateOfEmployee = true;
  } else if (isActive === false) {
    currentStateOfEmployee = false;
  }

  return (
    <div>
      <article className="rounded-lg border border-gray-100 m-4 bg-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">
              Le Nomber de Ouvrier dans{" "}
              {currentStateOfEmployee === true ? "Actif" : "Archive"}
            </p>

            <p className="text-2xl font-medium text-gray-900">
              {currentStateOfEmployee === true
                ? activeCount[0].count
                : archiveCount[0].count}
            </p>
          </div>

          <span className="rounded-full bg-blue-100 p-3 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>
        </div>
      </article>
    </div>
  );
}
