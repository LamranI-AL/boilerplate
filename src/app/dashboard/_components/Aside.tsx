import React from "react";
import UserSlice from "./UserSlice";
import Link from "next/link";

export default function Aside() {
  return (
    <div className="h-32 rounded-lg bg-gray-200">
      <div className="flex h-screen flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
            macobate
          </span>

          <ul className="mt-6 space-y-1">
            <li>
              <div className="block  bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                categories des ouvriers
              </div>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-cyan-700 hover:bg-gray-100 hover:text-cyan-900">
                  <span className="text-sm font-medium"> rectutement</span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-cyan-700 hover:bg-gray-100 hover:text-cyan-900"
                    >
                      ajoute condidatur
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-cyan-700 hover:bg-gray-100 hover:text-cyan-900"
                    >
                      candidats retenus
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-cyan-700 hover:bg-gray-100 hover:text-cyan-900"
                    >
                      candidats non retenus
                    </a>
                  </li>
                </ul>
              </details>
            </li>

            <li className="flex py-2  rounded-lg px-4  text-sm font-medium text-cyan-700 hover:bg-gray-100 hover:text-cyan-900 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                />
              </svg>
              <Link href="/dashboard/activeEmployers" className="px-1">
                Active employers
              </Link>
            </li>

            <li className="flex py-2  rounded-lg px-4  text-sm font-medium text-cyan-700 hover:bg-gray-100 hover:text-cyan-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
              <Link
                href="/dashboard/archive"
                className="px-1 forced-colors:appearance-auto"
              >
                {/* <form>
  <legend> Choose a theme: </legend>
  <label>
    <input type="radio" class="forced-colors:appearance-auto appearance-none" />
    <p class="forced-colors:block hidden">
      Cyan
    </p>
    <div class="forced-colors:hidden h-6 w-6 rounded-full bg-cyan-200 ..."></div>
    <div class="forced-colors:hidden h-6 w-6 rounded-full bg-cyan-500 ..."></div>
  </label>
  <!-- ... -->
</form> */}
                Archive
              </Link>
            </li>
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <UserSlice />
        </div>
      </div>
    </div>
  );
}
