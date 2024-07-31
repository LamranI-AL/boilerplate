"use client";
import { addComent } from "@/actions/addComent";
import { Employer } from "@/interfaces/Interfaces";
import { ComentSchema } from "@/lib/zodTypes";
import { Session } from "next-auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
interface Props {
  session: Session | null;
  ouvrier: Employer;
}
function DeleteForm({ ouvrier, session }: Props) {
  const router = useRouter();
  const archiveEmployerClientSide = async (formData: FormData) => {
    const commentContent = formData.get("commentContent");
    const input = {
      commentContent: commentContent as string,
    };
    const UpdatedEmployee: Employer = {
      ...ouvrier,
      UserDelete: session?.user?.name ?? "",
      deleteDate: new Date(Date.now()),
      rejectMotif: (commentContent as string) ?? "",
      isArchive: true,
      isRejected: true,
    };
    // await addComent(formData);
    const result = ComentSchema.safeParse(input);
    if (result.success) {
      const toastId = toast.loading("Waiting...");
      await addComent(ouvrier, UpdatedEmployee);
      // await updateUserAction(newUpdatedUser);
      toast.dismiss(toastId);
      toast.success(
        "comment added successfully ,and employee delet successfully "
      );
      // router.push("/dashboard/list");
    } else {
      let errorMsg = "";
      result.error?.issues.forEach((issue) => {
        errorMsg += issue.path[0] + " : " + issue.message + " . \n";
      });
      console.log(result.error?.issues, errorMsg);
      toast.error(errorMsg);
    }
    // if (result.success) {

    // const UpdatedEmployee: Employer = {
    //   ...ouvrier,
    //   UserDelete: session.user?.name ?? "",
    //   deleteDate: new Date(Date.now()),
    //   isArchive: true,
    //   isRejected: true,
    // };

    // UpdateEmployer(ouvrier._id, UpdatedEmployee)
    //   .then(() => {
    //     router.push("/dashboard/list");
    //   })
    //   .catch((error) => console.log(error));
  };
  return (
    <div>
      <form
        action={archiveEmployerClientSide}
        className="rounded-lg bg-white p-8 shadow-2xl"
      >
        <h2 className="text-lg font-bold">
          {" "}
          Êtes-vous sûr de vouloir supprimer l'employé {ouvrier.FerstName} de
          CIN : {ouvrier.CIN} ?
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Faire cela pourrait causer des problèmes ailleurs, es-tu sûr à 100 %
          que c'est OK ?
        </p>

        <div className="m-5">
          <label
            htmlFor="OrderNotes"
            className="block text-sm font-medium text-gray-700"
          >
            Commentaire du rejet{" "}
          </label>

          <textarea
            name="commentContent"
            id="Commentaire_du_rejet"
            className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm p-5"
            rows={4}
            placeholder="Commentaire du rejet , soit rendement de ouvrier  , ou réputation ..."
          ></textarea>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            // onClick={archiveEmployer}
            type="submit"
            className="rounded bg-red-50 px-4 py-2 text-sm font-medium text-red-600"
          >
            Oui , je suis sure
          </button>

          <button
            type="button"
            className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
          >
            <Link href={"/dashboard/list"}>List</Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeleteForm;
