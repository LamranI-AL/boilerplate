import { Condidate } from "./Interfaces";

// Fetch all employers
export async function GetCondidates() {
  const response = await fetch("http://localhost:3001/condidates", {
    method: "GET",
    cache: "no-cache",
    // next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  const data = await response.json();
  return data;
}

// Fetch an employer by ID
export async function GetCondidateById(id: string) {
  const response = await fetch(`http://localhost:3001/condidates/${id}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
}

// Create a new employer
export async function CreateCondidate(newEmployer: Condidate) {
  const response = await fetch("http://localhost:3001/condidates", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newEmployer),
  });
  const data = await response.json();
  return data;
}

// Update an existing employer
export async function UpdateCondidate(id: string, newEmployer: Condidate) {
  const response = await fetch(`http://localhost:3001/condidates/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newEmployer),
  });
  const data = await response.json();
  return data;
}

// Delete an employer
export async function DeleteCondidate(id: string) {
  const response = await fetch(`http://localhost:3001/condidates/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}
