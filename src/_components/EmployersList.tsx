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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DeleteIcon, Download, Filter, User } from "lucide-react";
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
      {/* BLOCKE DE filter */}
      {employees.length === 0 ? null : (
        <form action={handleChange} className="flex">
          <div className="w-1/2l">
            <Select name="value">
              <SelectTrigger className="w-[500px]">
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
      )}
      {/* blockoftable */}
      <Table>
        <TableCaption>A list</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">CIN</TableHead>
            <TableHead>Prénom</TableHead>
            <TableHead>Nom</TableHead>
            <TableHead>Date de Naissance</TableHead>
            <TableHead>Numéro de Téléphone</TableHead>
            <TableHead>Poste</TableHead>
            <TableHead>plus d'infos</TableHead>
            <TableHead className="text-right">OP</TableHead>
          </TableRow>
        </TableHeader>

        {employees.length === 0 ? (
          <TableBody>
            {condidats.map((condidate: Condidate) => (
              <CondidateSlice key={condidate._id} condidate={condidate} />
            ))}
          </TableBody>
        ) : (
          <TableBody>
            {employees.map((ouvrier: Employer) => (
              <EmployeeSlice
                key={ouvrier._id}
                employer={ouvrier}
                isActive={!ouvrier.isRejected}
              />
            ))}
          </TableBody>
        )}
        {/* </TableBody> */}
        <TableFooter>
          <TableRow>
            <TableCell colSpan={7}>Total</TableCell>
            {employees.length === 0 ? (
              <TableCell className="text-right flex">
                {condidats.length} <User className="text-xs" />
              </TableCell>
            ) : (
              <TableCell className="text-right flex">
                {employees.length}
                <User className="text-xs" />{" "}
              </TableCell>
            )}
          </TableRow>
        </TableFooter>
      </Table>
      {/* telechrge block  */}
      {employees.length === 0 ? (
        <Button
          onClick={telechargeActionCondidats}
          className="w-full m-2 text-2xl font-bold "
          variant="link"
        >
          <Download />
        </Button>
      ) : (
        <Button
          onClick={telechargeActionEmployee}
          className="w-full m-2 text-2xl font-bold "
          variant="link"
        >
          <Download />
        </Button>
      )}
    </div>
  );
};

export default EmployeeList;
