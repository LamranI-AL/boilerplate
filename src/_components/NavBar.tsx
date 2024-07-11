"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "./Search";

function NavBar() {
  const items = [
    { key: "1", name: "Employés", link: "/dashboard" },
    { key: "2", name: "Ajoute", link: "/ajouter-ouvrier" },
    // { key: "3", name: "Recrutement", link: "/dashboard" },
    { key: "4", name: "Condidate", link: "/condidats" },
  ];

  return (
    <header className="bg-white w-full transition-all duration-300 shadow-md">
      <div className="flex h-16 max-w-screen-xxl items-center justify-center gap-8 sm:px-6 lg:px-8">
        <Link className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <Image src="/vercel.svg" alt="logo" width={30} height={30} />
        </Link>

        <nav aria-label="Global" className="flex-1">
          <ul className="flex justify-center items-center gap-6 text-sm">
            {items.map((navItem) => (
              <li key={navItem.key}>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75 active:font-bold visited:font-bold"
                  href={navItem.link}
                >
                  {navItem.name}
                </Link>
              </li>
            ))}
            <Search />
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
