import { GetEmployerById } from "@/_services/GetEmployers";
import { Employer, Session } from "@/interfaces/Interfaces";
import DeleteForm from "../../_components/delete-form";
import { getServerSession } from "next-auth";
interface Props {
  params: {
    EmployerId: number;
  };
}
async function page({ params }: Props) {
  const session = await getServerSession();
  const ouvrier: Employer = await GetEmployerById(params.EmployerId.toString());

  return <DeleteForm ouvrier={ouvrier} session={session} key={ouvrier._id} />;
}

export default page;
