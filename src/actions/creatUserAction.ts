"use server";
import { CreateEmployer } from "@/_services/GetEmployers";
import { Employer, Session } from "@/interfaces/Interfaces";
import { getServerSession } from "next-auth";

export const creatUserAction = async (formData: FormData) => {
  const session: Session | any = getServerSession();
  const first_name = formData.get("first_name");
  const last_name = formData.get("last_name");
  const CIN = formData.get("CIN");
  const phone = formData.get("phone");
  const date_naissance = formData.get("date_naissance") as string;
  const poste = formData.get("poste");
  const newOuvrier: Employer | any = {
    CIN: CIN ?? "",
    FerstName: first_name ?? "",
    lastName: last_name ?? "",
    phoneNumber: phone ?? "",
    dateNaissance: new Date(date_naissance ?? ""),
    email: "",
    posteName: poste ?? "",
    isRejected: false,
    isArchive: false,
    raison: "",
    createdAt: new Date(Date.now()),
    updateAt: new Date(),
    creatUser: session?.user?.name ?? "",
    deleteDate: new Date(""),
    UserDelete: "",
    UserUpdate: "",
    isInBlackList: false,
  };
  await CreateEmployer(newOuvrier)
    .then(() => {
      console.log("creat employee is ok ");
    })
    .catch((err) => {
      console.log(err);
    });
};
