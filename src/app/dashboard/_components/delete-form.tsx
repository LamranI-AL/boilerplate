"use client";
import { UpdateEmployer } from "@/_services/GetEmployers";
import { Employer, Session } from "@/_services/Interfaces";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
interface Props {
  session: Session;
  ouvrier: Employer;
}
function DeleteForm({ ouvrier, session }: Props) {
  const router = useRouter();
  const archiveEmployer = () => {
    const UpdatedEmployee: Employer = {
      ...ouvrier,
      UserDelete: session.user.name ?? "",
      deleteDate: new Date(Date.now()),
      isArchive: true,
      isRejected: true,
    };

    UpdateEmployer(ouvrier._id, UpdatedEmployee)
      .then(() => {
        // window.location.href = "/dashboard";
        router.push("/dashboard");
      })
      .catch((error) => console.log(error));
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

export default DeleteForm;
