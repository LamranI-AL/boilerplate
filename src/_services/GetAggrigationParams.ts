export const GetCountActiveAndArchiveEmployer = async () => {
  const response = await fetch("http://localhost:3001/reports/count", {
    method: "GET",
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
};
