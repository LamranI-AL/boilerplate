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
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { telechargeAction } from "@/app/_utils/reports";
interface Props {
  employers: Employer[];
  condidats: Condidate[];
  newPostesNonRep: string[];
}
const EmployeeList = ({ newPostesNonRep, employers, condidats }: Props) => {
  const telechargeActionEmployee = async () => {
    await telechargeAction("employees");
  };
  const telechargeActionCondidats = async () => {
    await telechargeAction("condidats");
  };
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
      <table className="min-w-full divide-y-2 text-red-600 text-center  divide-gray-200 my-2 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium ">Prénom</th>
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
    );
  }
  return (
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

      {employees.length === 0 ? (
        <Button
          onClick={telechargeActionCondidats}
          className="w-full m-2 text-xl font-bold "
          variant="link"
        >
          télécharger tous les condidats
        </Button>
      ) : (
        <Button
          onClick={telechargeActionEmployee}
          className="w-full m-2 text-xl font-bold "
          variant="link"
        >
          télécharger tous les employers
        </Button>
      )}
      {/* {  } */}
    </div>
  );
};

export default EmployeeList;
