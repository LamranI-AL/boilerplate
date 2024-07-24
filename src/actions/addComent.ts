"use server";

import { UpdateEmployer } from "@/_services/GetEmployers";
import { Employer } from "@/interfaces/Interfaces";

export const addComent = async (
  ouvrier: Employer,
  UpdatedEmployee: Employer
) => {
  //   const commentContent = formData.get("commentContent");
  await UpdateEmployer(ouvrier._id, UpdatedEmployee);

  console.log(UpdateEmployer);
};
