import { GetEmployerById } from "@/_services/GetEmployers";
import { Employer, Session } from "@/interfaces/Interfaces";
import { auth } from "@/auth";
import DeleteForm from "../../_components/delete-form";
interface Props {
  params: {
    EmployerId: number;
  };
}
async function page({ params }: Props) {
  const session = await auth();
  const ouvrier: Employer = await GetEmployerById(params.EmployerId.toString());

  return <DeleteForm ouvrier={ouvrier} session={session} key={ouvrier._id} />;
}

export default page;
