import EmployeeList from "@/_components/EmployersList";
import StatistiqueCounterOfActiveEmployee from "@/_components/StatistiqueCounterOfActiveEmployee";
import { GetEmployers } from "@/_services/GetEmployers";
import { GetPosts } from "@/_services/GetPosts";
import { Employer, Poste } from "@/interfaces/Interfaces";

async function ArchiveEmployersPage() {
  const postes: Poste[] = await GetPosts();
  const newPostesNonRep: string[] = enleverValeursRepetees(
    postes.map((p) => p.name)
  );
  function enleverValeursRepetees<T>(tableau: T[]): T[] {
    const tableauUnique: T[] = [];
    for (const valeur of tableau) {
      if (!tableauUnique.includes(valeur)) {
        tableauUnique.push(valeur);
      }
    }
    return tableauUnique;
  }
  const employers = await GetEmployers();
  let employersActive: Employer[] = [];
  if (employers.length !== 0) {
    employersActive = employers.filter(
      (employer: Employer) =>
        employer.isRejected === true && employer.isArchive === true
    );
  }
  return (
    <div>
      <StatistiqueCounterOfActiveEmployee isActive={false} />
      <EmployeeList
        newPostesNonRep={newPostesNonRep}
        employers={employersActive}
        condidats={[]}
      />
    </div>
  );
}

export default ArchiveEmployersPage;
