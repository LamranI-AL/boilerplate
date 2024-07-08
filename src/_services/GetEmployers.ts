import { Employer } from "./Interfaces";

// Fetch all employers
export async function GetEmployers() {
  const response = await fetch("http://localhost:3001/employers", {
    method: "GET",
    cache: "no-cache",
    // next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  const data = await response.json();
  return data;
}

// Fetch an employer by ID
export async function GetEmployerById(id: string) {
  const response = await fetch(`http://localhost:3001/employers/${id}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
}

// Create a new employer
export async function CreateEmployer(newEmployer: Employer) {
  const response = await fetch("http://localhost:3001/employers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newEmployer),
  });
  const data = await response.json();
  return data;
}

// Update an existing employer
export async function UpdateEmployer(id: string, newEmployer: Employer) {
  const response = await fetch(`http://localhost:3001/employers/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newEmployer),
  });
  const data = await response.json();
  return data;
}

// Delete an employer
export async function DeleteEmployer(id: string) {
  const response = await fetch(`http://localhost:3001/employers/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}
