import EmployeeList from "@/_components/EmployersList";
import { GetEmployers } from "@/_services/GetEmployers";
import { Suspense } from "react";
import Loading from "./loading";
import { Employer } from "@/_services/Interfaces";
import StatistiqueCounterOfActiveEmployee from "@/_components/StatistiqueCounterOfActiveEmployee";
import CondidatsHeader from "../condidats/_components/condidatsHeader";
import { Toaster } from "react-hot-toast";

export default async function Dashboard() {
  const employers = await GetEmployers();
  const employersActive = employers.filter(
    (employer: Employer) =>
      employer.isRejected === false && employer.isArchive === false
  );
  return (
    <div>
      <CondidatsHeader type="ouvrier" />
    </div>
  );
}
