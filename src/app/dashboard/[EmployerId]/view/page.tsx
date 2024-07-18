// "use client";
import { GetEmployerById } from "@/_services/GetEmployers";
import { Employer } from "@/_services/Interfaces";
import EmployerCard from "../../_components/EmployerCard";
import PostArchive from "../../_components/postArchive";
import Link from "next/link";
import FormsSanctionValidation from "../../_components/form-sanction-validation";
interface Props {
  params: {
    EmployerId: number;
  };
}
async function page({ params }: Props) {
  const ouvrier: Employer = await GetEmployerById(params.EmployerId.toString());
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:py-12">
          <EmployerCard employee={ouvrier} />
          <div className="flex justify-between m-2">
            <Link
              className="group flex items-center justify-between gap-4 rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
              href={`/dashboard/${ouvrier._id}/edit`}
            >
              <span className="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500">
                Modifier
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
            {ouvrier.isRejected === false && (
              <Link
                className="group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-1 text-red-600 transition-colors hover:bg-red-600 focus:outline-none focus:ring active:bg-red-500"
                href={`/dashboard/${ouvrier._id}/delete`}
              >
                <span className="font-medium transition-colors group-hover:text-white">
                  Supprimer
                </span>

                <span className="shrink-0 rounded-full border border-red-600 bg-white p-2 group-active:border-red-500">
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
            )}
          </div>
          <FormsSanctionValidation />
        </div>
      </div>
      <PostArchive />
    </section>
  );
}

export default page;
