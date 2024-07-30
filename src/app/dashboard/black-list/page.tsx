import { GetEmployers } from "@/_services/GetEmployers";
import { Employer } from "@/interfaces/Interfaces";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

type Props = {};

async function BlackListPage({}: Props) {
  let employers: Employer[] = await GetEmployers();
  let employersInBlackList: Employer[] = [];
  if (employers.length !== 0) {
    employersInBlackList = employers.filter(
      (employer: Employer) => employer.isInBlackList === true
    );
  }
  return (
    <Table>
      <TableCaption className="text-red-900 font-bold text-3xl">
        Black liste
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Prénom</TableHead>
          <TableHead>Nom</TableHead>
          <TableHead>CIN</TableHead>
          <TableHead>Date de Naissance</TableHead>
          <TableHead>Numéro de Téléphone </TableHead>
          <TableHead className="text-right">Poste</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employersInBlackList.map((employee) => (
          <TableRow key={employee.CIN}>
            <TableCell className="font-medium">
              <Link href={"/"}>{employee.lastName}</Link>
            </TableCell>
            <TableCell>{employee.FerstName}</TableCell>
            <TableCell>{employee.CIN}</TableCell>
            <TableCell>
              {new Date(employee.dateNaissance).toLocaleDateString()}
            </TableCell>
            <TableCell>{employee.phoneNumber}</TableCell>
            <TableCell className="text-right">{employee.posteName}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default BlackListPage;
