"use server";
import { UpdateEmployer } from "@/_services/GetEmployers";
import { Employer } from "@/interfaces/Interfaces";

export const addComent = async (
  ouvrier: Employer,
  UpdatedEmployee: Employer
) => {
  await UpdateEmployer(ouvrier._id, UpdatedEmployee).then(() =>
    console.log(UpdateEmployer)
  );
};
