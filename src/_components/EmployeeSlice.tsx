"use client";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Employer } from "@/interfaces/Interfaces";
import { EyeIcon, Trash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
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
import { UpdateEmployer } from "@/_services/GetEmployers";
import { useSession } from "next-auth/react";

interface EmployeeSliceProps {
  employer: Employer;
  isActive: boolean;
}

const EmployesList: React.FC<EmployeeSliceProps> = ({
  employer,
  isActive,
}: EmployeeSliceProps) => {
  const { data: session } = useSession();
  const router = useRouter();
  const newEmployeeRejected: Employer = {
    ...employer,
    isArchive: true,
    isRejected: true,
    deleteDate: new Date(Date.now()),
    UserDelete: session?.user?.name as string,
  };
  const newEmployeeInBlackList: Employer = {
    ...employer,
    isInBlackList: true,
    deleteDate: new Date(Date.now()),
    UserDelete: session?.user?.name as string,
  };
  const archiverEmployee = async () => {
    try {
      await UpdateEmployer(employer._id, newEmployeeRejected);
      router.push("/dashboard/list");
    } catch (error) {
      console.log("error : " + error);
    }
  };
  const blacklistedEmployee = async () => {
    try {
      await UpdateEmployer(employer._id, newEmployeeInBlackList);
      router.push("/dashboard/list");
    } catch (error) {
      console.log("error : " + error);
    }
  };
  const getDate = () => {
    const now = new Date(employer.dateNaissance);
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  };
  return (
    <TableRow key={employer._id}>
      <TableCell className="font-medium">{employer.CIN}</TableCell>
      <TableCell>{employer.FerstName.toLowerCase()}</TableCell>
      <TableCell>{employer.lastName.toUpperCase()}</TableCell>
      <TableCell>{getDate()}</TableCell>
      <TableCell>{employer.phoneNumber}</TableCell>
      <TableCell>{employer.posteName}</TableCell>
      <TableCell className="">
        <Link href={`/dashboard/${employer._id}/view`}>
          <EyeIcon className="text-center text-cyan-900" />
        </Link>
      </TableCell>
      <TableCell className="text-right">
        {employer.isRejected === true ? (
          <div className="text-[10px] text-center">{employer.UserDelete}</div>
        ) : (
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
                  considéré comme un ancien employé de Macobate et non plus
                  comme un employé actuel
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <div className="flex justify-end gap-5">
                  <AlertDialogAction
                    onClick={blacklistedEmployee}
                    className="text-red-800 border border-red-800 hover:bg-red-300 bg-inherit"
                  >
                    ajouter au list noir
                  </AlertDialogAction>
                  <AlertDialogCancel>exit</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={archiverEmployee}
                    className="text-red-950 hover:bg-red-100 bg-inherit"
                  >
                    archiver
                  </AlertDialogAction>
                </div>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </TableCell>
    </TableRow>
  );
};

export default EmployesList;
