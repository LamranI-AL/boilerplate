import { baseUrl } from "./GetEmployers";

export const GetCountActiveAndArchiveEmployer = async () => {
  const response = await fetch(`${baseUrl}/api/reportsCount`, {
    method: "GET",
    cache: "no-cache",
  });
  console.log(response);
  const data = await response.json();
  return data;
};
