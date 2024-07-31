import { baseUrl } from "./GetEmployers";
import { Sanction } from "../interfaces/Interfaces";

// Fetch all employers
export async function GetSanctions() {
  const response = await fetch(`${baseUrl}/sanctions`, {
    method: "GET",
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
}
export async function GetSanctionByIdEmploye(id: string) {
  const response = await fetch(`${baseUrl}/sanctions/${id}`, {
    method: "GET",
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
}
// export async function GetSanctionByIdEmploye(id: string) {
//   const response: Sanction[] = await GetSanctions();
//   const sanctionEmployes = response.filter((s) => s.EmployerId === id);
//   return sanctionEmployes;
// }
// Create a  newCondidate
export async function CreateSanction(newSanction: Sanction) {
  const response = await fetch(`${baseUrl}/sanctions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newSanction),
  });
  const data = await response.json();
  return data;
}

// Update an existing employer
export async function UpdateSanction(id: string, newSanction: Sanction) {
  const response = await fetch(`${baseUrl}/sanctions/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newSanction),
  });
  const data = await response.json();
  return data;
}

// Delete an employer
export async function DeleteSanction(id: string) {
  const response = await fetch(`${baseUrl}/sanctions/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}
