import Search from "@/_components/Search";
import Link from "next/link";
import React from "react";
interface headerProps {
  type: string;
}
function CondidatsHeader({ type }: headerProps) {
  return (
    <section className=" text-gray-700 mr-14">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
        {type === "ouvrier" ? (
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Cette phase est dédiée à
              <span className="sm:block"> la gestion des ouvriers</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Cette phase est dédiée à la gestion des ouvriers au sein de
              l'entreprise 'Macobate', incluant leurs informations personnelles
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded border border-cyan-600 bg-cyan-700 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-gray-700 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/ajouter-ouvrier"
              >
                Ajouter
              </Link>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Cette phase est dédiée à
              <span className="sm:block"> la gestion des candidats</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Cette phase est dédiée à la gestion des candidats qui passent le
              test, avec la possibilité de réussir ou non.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded border border-cyan-600 bg-cyan-700 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-gray-700 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/ajouter-condidate"
              >
                Ajouter
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CondidatsHeader;
