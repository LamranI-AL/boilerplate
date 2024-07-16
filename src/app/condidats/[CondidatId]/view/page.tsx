import { GetCondidateById } from "@/_services/GetCondidats";
import { Condidate } from "@/_services/Interfaces";
import Link from "next/link";
import React from "react";
import CondidateCard from "../../_components/condidate-card";
interface Props {
  params: {
    CondidatId: number;
  };
}
async function page({ params }: Props) {
  const condidate: Condidate = await GetCondidateById(
    params.CondidatId.toString()
  );
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:py-12">
          <CondidateCard condidate={condidate} />
          <div className="flex justify-between m-2">
            <Link
              className="group flex items-center justify-between gap-4 rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
              href={`/condidats/${condidate._id}/switsh`}
            >
              <span className="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500">
                Réemployé
              </span>

              <span className="shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500">
                <svg
                  className="size-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>

            <Link
              className="group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-1 text-cyan-600 transition-colors hover:bg-cyan-600 focus:outline-none focus:ring active:bg-cyan-500"
              href={`/condidats/${condidate._id}/edite`}
            >
              <span className="font-medium transition-colors group-hover:text-white">
                Modifier
              </span>

              <span className="shrink-0 rounded-full border border-cyan-600 bg-white p-2 group-active:border-cyan-500">
                <svg
                  className="size-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
