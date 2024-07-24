"use client";
import { addPosteAction } from "@/actions/addPoste";
import { Employer, Poste } from "@/interfaces/Interfaces";
import { posteSchema } from "@/lib/zodTypes";
import React from "react";
import toast from "react-hot-toast";

type Props = {
  ouvrier: Employer;
};

function FormsPosteValidation({ ouvrier }: Props) {
  //   "use server";
  const addPoste = async (formData: FormData) => {
    const nouveauPoste = formData.get("newPost") as string;
    const date = formData.get("date") as string;
    const motif = formData.get("motif") as string;
    console.log(nouveauPoste, date, motif);
    const inputUser = {
      name: nouveauPoste as string,
      date: new Date(date as string),
      motif: motif as string,
    };
    const newPoste: Poste = {
      dateFin: new Date(""),
      EmployerCIN: ouvrier.CIN,
      EmployerId: ouvrier._id,
      name: nouveauPoste as string,
      dateDebute: new Date(date),
      motifDebut: motif as string,
    };
    //validation
    const result = posteSchema.safeParse(inputUser);
    if (result.success) {
      const toastId = toast.loading("Waiting...");
      await addPosteAction(newPoste);

      toast.dismiss(toastId);
      toast.success("poste added successfully");
    } else {
      let errorMsg = "";
      result.error.issues.forEach((issue) => {
        errorMsg += issue.path[0] + " : " + issue.message + " . \n";
      });
      console.log(result.error.issues, errorMsg);
      toast.error(errorMsg);
    }
  };
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Ajouter Poste</h1>

          <p className="mt-4 text-gray-500">
            ajouter un post de {ouvrier.FerstName} {ouvrier.lastName} pour une
            augmentation de promotion
          </p>
        </div>

        <form
          action={addPoste}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="email" className="text-gray-800 px-2">
              nouveau poste
            </label>

            <div className="relative">
              <input
                type="text"
                name="newPost"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter sanction"
              />
            </div>
          </div>

          <div>
            <label htmlFor="date" className="text-gray-800 px-2">
              Date d'occupation
            </label>

            <div className="relative">
              <input
                type="date"
                name="date"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter date"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-gray-800 px-2">
              Motif de l'augmentation
            </label>

            <div className="relative">
              <input
                type="text"
                name="motif"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter faute"
              />
            </div>
          </div>

          <div className="flex w-full items-center justify-between">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-slate-700  px-5 py-3 text-sm font-medium text-white"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormsPosteValidation;
