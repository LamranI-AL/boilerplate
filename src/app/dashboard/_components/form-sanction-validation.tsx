// import React from "react";
"use client";
import { Employer, Sanction } from "@/_services/Interfaces";
import { addSanction } from "@/actions/addSanction";
import { sanctionSchema } from "@/lib/zodTypes";
import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";
// });
interface Props {
  ouvrier: Employer;
}
function FormsSanctionValidation({ ouvrier }: Props) {
  //   console.log(ouvrier._id);
  const addSanctionClient = async (formData: FormData) => {
    const sanction = formData.get("sanction") as string;
    const date = formData.get("date") as string;
    const faute = formData.get("faute") as string;
    const newSanction: Sanction | any = {
      EmployerId: ouvrier._id,
      sanction: sanction,
      date: new Date(date),
      faute: faute,
    };
    //validation
    const result = sanctionSchema.safeParse(newSanction);
    if (result.success) {
      const toastId = toast.loading("Waiting...");
      await addSanction(result.data);

      toast.dismiss(toastId);
      toast.success("Sanction added successfully");
      revalidatePath(`/dashboard/${ouvrier._id}/view`);
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
          <h1 className="text-2xl font-bold sm:text-3xl">Ajouter sanction</h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form
          action={addSanctionClient}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="email" className="text-gray-800 px-2">
              Sanction
            </label>

            <div className="relative">
              <input
                type="text"
                name="sanction"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter sanction"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="text-gray-800 px-2">
              Date
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
              faute
            </label>

            <div className="relative">
              <input
                type="text"
                name="faute"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter faute"
              />
            </div>
          </div>

          <div className="flex w-full items-center justify-between">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-indigo-700  px-5 py-3 text-sm font-medium text-white"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormsSanctionValidation;
