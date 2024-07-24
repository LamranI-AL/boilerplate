"use client";
import React, { useState } from "react";
import EmployeeSlice from "./EmployeeSlice";
import { Condidate, Employer } from "@/interfaces/Interfaces";
import CondidateSlice from "./condidate-slice";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { GetEmployersByPost } from "@/_services/GetPosts";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
interface Props {
  employers: Employer[];
  condidats: Condidate[];
  newPostesNonRep: string[];
}
const EmployeeList = async ({
  newPostesNonRep,
  employers,
  condidats,
}: Props) => {
  const [employees, setEmployees] = useState(employers);
  const handleChange = async (formData: FormData) => {
    const value = formData.get("value") as string;
    console.log(value);
    // const employers1 = await GetEmployersByPost(value);
    const employers1 = employees.filter((empl) => empl.posteName === value);
    console.log(employers1);
    setEmployees(employers1);
  };

  if (employees.length === 0 && condidats.length === 0) {
    return (
      <div className="text-red-600 text-center text-3xl">
        <table className="min-w-full divide-y-2 divide-gray-200 my-2 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium ">
                Prénom
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium ">Nom</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium ">CIN</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium ">
                Date de Naissance
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium ">
                Numéro de Téléphone
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className="text-center">no data</tbody>
        </table>
      </div>
    );
  }
  return (
    <div>
      <div className="container mx-auto mt-10 ">
        {employees.length === 0 ? (
          <h1 className="text-2xl font-bold mb-5">Liste des Condidats</h1>
        ) : (
          <div>
            <form action={handleChange} className="flex">
              <div className="w-full">
                <Select name="value">
                  <SelectTrigger className="w-[180px]">
                    {" "}
                    <Filter className="text-sm" />
                    <SelectValue placeholder="Select a poste" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="flex">Postes</SelectLabel>
                      {newPostesNonRep.map((poste) => {
                        return <SelectItem value={poste}>{poste}</SelectItem>;
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="mx-2">
                Filter
              </Button>
            </form>
            <h1 className="text-2xl font-bold mb-5">Liste des Ouvriers</h1>
          </div>
        )}
        <table className="min-w-full divide-y-2 divide-gray-200 my-2 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Prénom
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Nom
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                CIN
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Date de Naissance
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Poste
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Numéro de Téléphone
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          {employees.length === 0 ? (
            <tbody className="divide-y divide-gray-200">
              {condidats.map((condidate: Condidate, key) => (
                <CondidateSlice
                  key={key}
                  condidate={condidate}
                  isSucess={!condidate.isSucceeded}
                />
              ))}
            </tbody>
          ) : (
            <tbody className="divide-y divide-gray-200">
              {employees.map((ouvrier: Employer, key) => (
                <EmployeeSlice
                  key={key}
                  employer={ouvrier}
                  isActive={!ouvrier.isRejected}
                />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
