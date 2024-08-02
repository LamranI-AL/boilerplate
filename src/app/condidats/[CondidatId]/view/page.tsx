import { GetCondidateById, UpdateCondidate } from "@/_services/GetCondidats";
import { Condidate, Employer, Poste } from "@/interfaces/Interfaces";
import Link from "next/link";
import React from "react";
import CondidateCard from "../../_components/condidate-card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { CreateEmployer } from "@/_services/GetEmployers";
import { CreatePost } from "@/_services/GetPosts";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
interface Props {
  params: {
    CondidatId: number;
  };
}
async function page({ params }: Props) {
  const condidate: Condidate = await GetCondidateById(
    params.CondidatId.toString()
  );
  const session = await getServerSession();
  const reEmployeeOne = async (formData: FormData) => {
    "use server";
    // console.log("is ok");
    const newEmployee: Employer | any = {
      CIN: condidate.CIN,
      isArchive: false,
      isRejected: false,
      creatUser: (session?.user?.name as string) ?? "null",
      FerstName: condidate.firstName,
      lastName: condidate.lastName,
      email: condidate.email,
      phoneNumber: condidate.phoneNumber,
      createdAt: new Date(Date.now()),
      dateNaissance: condidate.dateNaissance,
      posteName: condidate.posteApplique,
      raison: condidate.motifApply,
    };
    const newPoste: Poste | any = {
      EmployerCIN: condidate.CIN,
      EmployerId: condidate._id,
      dateDebute: new Date(Date.now()),
      motifDebut: condidate.motifApply,
      name: condidate.posteApplique,
    };
    await CreateEmployer(newEmployee)
      .then(() => {
        console.log("creat employee is ok ");
      })
      .catch((err) => {
        console.log(err);
      });
    await CreatePost(newPoste)
      .then(() => {
        console.log("creat post is ok ");
      })
      .catch((err) => {
        console.log(err);
      });
    const updateCondidate: Condidate = {
      ...condidate,
      isArchived: true,
    };
    await UpdateCondidate(condidate._id, updateCondidate).then(() =>
      console.log("condidate erchived succesfully")
    );
    revalidatePath("/");
  };
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:py-12">
          {condidate && <CondidateCard condidate={condidate} />}

          <div className="flex justify-between m-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  className="group  flex items-center justify-between gap-4 rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
                >
                  <span className="font-medium py-10 text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500">
                    Réemployé
                  </span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Êtes-vous absolument sûr ?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Si vous cliquez sur 'réembaucher', ce candidat sera
                    automatiquement considéré comme un employé de Macobate et
                    non plus comme un candidat passant le test.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <form
                    action={reEmployeeOne}
                    className="flex justify-end gap-2"
                  >
                    <AlertDialogCancel>exit</AlertDialogCancel>
                    <AlertDialogAction type="submit">
                      réembaucher
                    </AlertDialogAction>
                  </form>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Link
              className="group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-1 text-cyan-600 transition-colors hover:bg-cyan-600 focus:outline-none focus:ring active:bg-cyan-500"
              href={`/condidats/${condidate._id}/edite`}
            >
              <span className="font-medium transition-colors group-hover:text-white">
                Modifier
              </span>

              <span className="shrink-0 rounded-full border border-cyan-600 bg-white p-2 group-active:border-cyan-500">
                <svg
                  className="size-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
