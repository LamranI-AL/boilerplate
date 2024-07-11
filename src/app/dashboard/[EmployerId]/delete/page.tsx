"use client";
import UpdateEmployerSlice from "@/_components/UpdateEmployer";
import {
  DeleteEmployer,
  GetEmployerById,
  UpdateEmployer,
} from "@/_services/GetEmployers";
import { Employer } from "@/_services/Interfaces";
import Link from "next/link";
import React from "react";
interface Props {
  params: {
    EmployerId: number;
  };
}

async function page({ params }: Props) {
  console.log(params.EmployerId);
  const ouvrier: Employer = await GetEmployerById(params.EmployerId.toString());
  const archiveEmployer = () => {
    const UpdatedEmployee: Employer = {
      ...ouvrier,
      isArchive: true,
      isRejected: true,
    };
    UpdateEmployer(params.EmployerId.toString(), UpdatedEmployee).then(() => {
      window.location.href = "/dashboard";
    });
  };
  return (
    <div>
      <div className="rounded-lg bg-white p-8 shadow-2xl">
        <h2 className="text-lg font-bold">
          {" "}
          Êtes-vous sûr de vouloir supprimer l'employé {ouvrier.FerstName} de
          CIN : {ouvrier.CIN} ?
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Faire cela pourrait causer des problèmes ailleurs, es-tu sûr à 100 %
          que c'est OK ?
        </p>

        <div className="mt-4 flex gap-2">
          <button
            onClick={archiveEmployer}
            type="button"
            className="rounded bg-red-50 px-4 py-2 text-sm font-medium text-red-600"
          >
            Oui , je suis sure
          </button>

          <button
            type="button"
            className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
          >
            <Link href={"/dashboard"}>List</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
