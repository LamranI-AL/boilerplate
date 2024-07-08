"use client";
import { SignIn, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "./Search";

function NavBar() {
  const { user } = useUser();
  const items = [
    { key: "1", name: "creat ouvrier", link: "/ajouter-ouvrier" },
    { key: "2", name: "dashboard", link: "/dashboard" },
    { key: "3", name: "contact support", link: "/supportContact" },
  ];
  return (
    <header className={`bg-white  w-full transition-all duration-300`}>
      <div className="flex h-16 max-w-screen-xxl items-center gap-8 sm:px-6 lg:px-8 shadow-md">
        <Link className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <Image src="/next.svg" alt="logo" width={30} height={30} />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {items.map((navItem) => {
                return (
                  <li key={navItem.key}>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75 active:font-bold visited:font-bold"
                      href={navItem.link}
                    >
                      {navItem.name}
                    </Link>
                  </li>
                );
              })}
              <Search />
            </ul>
          </nav>
          {!user ? (
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <SignIn />
              </div>
              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <h2 className="flex text-teal-600 gap-1 cursor-pointer "></h2>
              <UserButton />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
