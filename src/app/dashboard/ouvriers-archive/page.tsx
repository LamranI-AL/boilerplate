import EmployeeList from "@/_components/EmployersList";
import StatistiqueCounterOfActiveEmployee from "@/_components/StatistiqueCounterOfActiveEmployee";
import { GetEmployers } from "@/_services/GetEmployers";
import { Employer } from "@/_services/Interfaces";

async function ArchiveEmployersPage() {
  const employers = await GetEmployers();
  const employersActive = employers.filter(
    (employer: Employer) =>
      employer.isRejected === true && employer.isArchive === true
  );
  return (
    <div>
      {/* <StatistiqueCounterOfActiveEmployee isActive={false} /> */}
      <EmployeeList employers={employersActive} condidats={[]} />
    </div>
  );
}

export default ArchiveEmployersPage;
