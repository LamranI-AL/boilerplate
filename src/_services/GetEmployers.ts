import { Employer } from "../interfaces/Interfaces";
// export const baseUrl = "http://localhost:3001";
export const baseUrl = "https://macobate-api.vercel.app";
// Fetch all employers
export async function GetEmployers() {
  const response = await fetch(`${baseUrl}/employers`, {
    method: "GET",
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
}

// Fetch an employer by ID
export async function GetEmployerById(id: string) {
  const response = await fetch(`${baseUrl}/employers/${id}`, {
    method: "GET",
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
}

// Create a new employer
export async function CreateEmployer(newEmployer: Employer) {
  const response = await fetch(`${baseUrl}/employers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newEmployer),
  });
  const data = await response.json();
  return data;
}

// Update an existing employer
export async function UpdateEmployer(id: string, newEmployer: Employer) {
  const response = await fetch(`${baseUrl}/employers/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newEmployer),
  });
  const data = await response.json();
  return data;
}

// Delete an employer
export async function DeleteEmployer(id: string) {
  const response = await fetch(`${baseUrl}/employers/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}
