"use client";
import { GetEmployers } from "@/_services/GetEmployers";
import { Employer } from "@/_services/Interfaces";
import { useSearchStore } from "@/_services/Store";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const GetCurrentValueOfSearch = () => {
  const search = useSearchStore.getState().currentSearch;
  return search;
};

const Search = () => {
  useEffect(() => {
    getEmployee();
  }, []);

  const getEmployee = async () => {
    const employees: Employer[] = await GetEmployers();
    console.log(employees);
    setEmployees(employees);
  };

  const [employees, setEmployees] = useState<Employer[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);
  const [showModal, setShowModal] = useState(false);

  // Ajout de l'état isFocused
  const [isFocused, setIsFocused] = useState(false);

  const { currentSearch, setCurrentSearch } = useSearchStore((state) => ({
    currentSearch: state.currentSearch,
    setCurrentSearch: state.setCurrentSearch,
  }));

  const handleInputChange = () => {
    setCurrentSearch(searchRef.current?.value as string);
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.FerstName.toLowerCase().includes(currentSearch.toLowerCase()) ||
      employee.CIN.toLowerCase().includes(currentSearch.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(currentSearch.toLowerCase())
  );

  return (
    <div>
      {/* Ajout de classes conditionnelles pour appliquer position: fixed */}
      <label
        className={`relative block ${
          isFocused ? "fixed top-0 left-0 w-full  z-50 p-4" : ""
        }`}
      >
        <div>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
        </div>
        <div className="flex gap-2">
          <input
            className="placeholder:italic placeholder:text-slate-400 bloc bg-blue-50 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:backdrop-blur-lg focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Recherche a ouvrier ..."
            type="text"
            name="search"
            ref={searchRef}
            onFocus={() => {
              setShowModal(true);
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            onChange={handleInputChange}
          />
        </div>
      </label>
      <div className={showModal ? "backdrop-blur-lg" : ""}>
        {showModal &&
          createPortal(
            <div className="modal fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm">
              <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                <div className="text-center font-bold mb-4">
                  Résultats de la recherche
                </div>
                <ul>
                  {filteredEmployees.map((employee, index) => (
                    <Link href={`/dashboard/${employee._id}/edit`} key={index}>
                      <li className="p-2 border-b">
                        {employee.FerstName} {employee.lastName} de CIN :{" "}
                        {employee.CIN}
                      </li>
                    </Link>
                  ))}
                </ul>
                <button
                  className="mt-4 bg-red-800 text-white py-2 px-4 rounded-md"
                  onClick={() => setShowModal(false)}
                >
                  Fermer
                </button>
              </div>
            </div>,
            document.body
          )}
      </div>
    </div>
  );
};

export default Search;
