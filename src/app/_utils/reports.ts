// import { baseUrl } from "./GetEmployers";

export const GetCountActiveAndArchiveEmployer = async () => {
  try {
    const response = await fetch("/api/reportsCount", {
      method: "GET",
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching the report count:", error);
    throw error;
  }
};
