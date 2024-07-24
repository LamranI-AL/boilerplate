import { baseUrl } from "./GetEmployers";
import { Condidate } from "../interfaces/Interfaces";

// Fetch all employers
export async function GetCondidates() {
  const response = await fetch(`${baseUrl}/api/condidats`, {
    method: "GET",
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
}

// Fetch an employer by ID
export async function GetCondidateById(id: string) {
  const response = await fetch(`${baseUrl}/api/condidats/${id}`, {
    method: "GET",
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
}

// Create a  newCondidate
export async function CreateCondidate(newCondidate: Condidate) {
  const response = await fetch(`${baseUrl}/api/condidats`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCondidate),
  });
  const data = await response.json();
  return data;
}

// Update an existing employer
export async function UpdateCondidate(id: string, newCondidate: Condidate) {
  const response = await fetch(`${baseUrl}/api/condidats/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCondidate),
  });
  const data = await response.json();
  return data;
}

// Delete an employer
export async function DeleteCondidate(id: string) {
  const response = await fetch(`${baseUrl}/api/condidats/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}
