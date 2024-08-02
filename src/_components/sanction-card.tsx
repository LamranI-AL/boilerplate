import { TableCell, TableRow } from "@/components/ui/table";
import { Employer, Sanction } from "@/interfaces/Interfaces";
import React from "react";
interface Props {
  sanction: Sanction;
  ouvrier: Employer;
}
function SanctionCard({ sanction, ouvrier }: Props) {
  const getDate = () => {
    const now = new Date(sanction.date);
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  };
  const date = new Date(sanction.date);
  return (
    <TableRow key={sanction._id}>
      <TableCell className="font-medium">{sanction.faute}</TableCell>
      <TableCell>{getDate()}</TableCell>
      <TableCell className="text-right">{sanction.faute}</TableCell>
      {/* <TableCell className="text-right">hy</TableCell> */}
    </TableRow>
  );
}

export default SanctionCard;
