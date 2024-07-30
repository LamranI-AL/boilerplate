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
import { GetCondidates } from "@/_services/GetCondidats";
import { Condidate } from "@/interfaces/Interfaces";

type Props = {};

async function BlackListPage({}: Props) {
  let condidats: Condidate[] = await GetCondidates();
  let condidatsArchive: Condidate[] = [];
  if (condidats.length !== 0) {
    condidatsArchive = condidats.filter(
      (condidate: Condidate) => condidate.isArchived === true
    );
  }
  return (
    <Table>
      <TableCaption className="text-red-900 font-bold text-3xl">
        Liste des archives déjà réembauchées{" "}
        <span className="text-gray-500 text-sm m-3">
          <Link href={"/dashboard/list"}>voir la list de ouvrier!</Link>
        </span>
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
        {condidatsArchive.map((condidate) => (
          <TableRow key={condidate.CIN}>
            <TableCell className="font-medium">
              <Link href={"/"}>{condidate.lastName}</Link>
            </TableCell>
            <TableCell>{condidate.firstName}</TableCell>
            <TableCell>{condidate.CIN}</TableCell>
            <TableCell>
              {new Date(condidate.dateNaissance).toLocaleDateString()}
            </TableCell>
            <TableCell>{condidate.phoneNumber}</TableCell>
            <TableCell className="text-right">
              {condidate.posteApplique}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default BlackListPage;
