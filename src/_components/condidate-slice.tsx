"use client";
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
import { TableCell, TableRow } from "@/components/ui/table";
import { Condidate } from "@/interfaces/Interfaces";
import { Trash, EyeIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
interface CondidatSliceProps {
  condidate: Condidate;
}

export default function CondidateSlice({ condidate }: CondidatSliceProps) {
  const deletCondidate = async () => {
    const router = useRouter();
    const newCondidat: Condidate = {
      ...condidate,
    };
    try {
    } catch (error) {}
  };
  const getDate = () => {
    const now = new Date(condidate.dateNaissance);
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  };
  return (
    <TableRow key={condidate._id}>
      <TableCell className="font-medium">{condidate.CIN}</TableCell>
      <TableCell>{condidate.firstName.toLowerCase()}</TableCell>
      <TableCell>{condidate.lastName.toUpperCase()}</TableCell>
      <TableCell>{getDate()}</TableCell>
      <TableCell>{condidate.phoneNumber}</TableCell>
      <TableCell>{condidate.posteApplique}</TableCell>
      <TableCell className="">
        <Link href={`/condidats/${condidate._id}/view`}>
          <EyeIcon className="text-center text-cyan-900" />
        </Link>
      </TableCell>
      <TableCell className="text-right">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="link" className="bg-transparent">
              <Trash className="text-red-800" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Êtes-vous absolument sûr ?</AlertDialogTitle>
              <AlertDialogDescription>
                En cliquant sur 'archiver', ce candidat sera automatiquement
                considéré comme un ancien condidat de macobate
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <form action={deletCondidate} className="flex justify-end gap-5">
                <AlertDialogCancel>exit</AlertDialogCancel>
                <AlertDialogAction
                  className="text-red-950 hover:bg-red-100 bg-inherit"
                  type="submit"
                >
                  archiver
                </AlertDialogAction>
              </form>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </TableCell>
    </TableRow>
  );
}
