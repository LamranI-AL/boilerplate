"use server";
import { CreateCondidate } from "@/_services/GetCondidats";
import { Condidate, Session } from "@/interfaces/Interfaces";
import { getServerSession } from "next-auth";

export const creatCondidateAction = async (formData: FormData) => {
  const session = await getServerSession();
  const first_name = formData.get("first_name") as string;
  const last_name = formData.get("last_name") as string;
  const CIN = formData.get("CIN") as string;
  const phone = formData.get("phone") as string;
  const date_naissance = formData.get("date_naissance") as string;
  const poste = formData.get("poste") as string;
  const motif = formData.get("motif") as string;
  const success_accept = formData.get("success_accept");
  const isSucceeded = success_accept === "reussi" ? true : false;
  console.log(isSucceeded);
  const newCondidat: Condidate | any = {
    CIN: CIN ?? "",
    firstName: first_name ?? "",
    lastName: last_name ?? "",
    phoneNumber: phone ?? "",
    dateNaissance: new Date(date_naissance ?? ""),
    email: "",
    posteApplique: poste ?? "",
    motifApply: motif,
    creatDate: new Date(Date.now()),
    updateDate: new Date(),
    creatUser: session?.user?.name ?? "",
    deleteDate: new Date(""),
    isSucceeded: isSucceeded,
    isArchived: false,
    UserApdate: "",
    UserDelete: "",
    dateApplication: new Date(Date.now()),
  };
  await CreateCondidate(newCondidat)
    .then(() => {
      console.log("creat condidate is ok ");
    })
    .catch((err) => {
      console.log(err);
    });
};
