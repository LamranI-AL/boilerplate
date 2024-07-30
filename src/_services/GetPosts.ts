import { baseUrl } from "./GetEmployers";
import { Employer, Poste } from "../interfaces/Interfaces";
// import { Sanction } from "./Interfaces";

// Fetch all employers
export async function GetPosts() {
  const response = await fetch(`${baseUrl}/posts`, {
    method: "GET",
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
}
export async function GetPostByIdEmploye(id: string) {
  const response = await fetch(`${baseUrl}/posts/${id}`, {
    method: "GET",
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
}
// Create a  newCondidate
export async function CreatePost(newPoste: Poste) {
  const response = await fetch(`${baseUrl}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPoste),
  });
  const data = await response.json();
  return data;
}

// Update an existing employer
export async function UpdatePost(id: string, newPoste: Poste) {
  const response = await fetch(`${baseUrl}/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPoste),
  });
  const data = await response.json();
  return data;
}

// Delete an employer
export async function DeletePoste(id: string) {
  const response = await fetch(`${baseUrl}/posts/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}
export async function GetEmployersByPost(Poste: string) {
  const response = await fetch(`${baseUrl}/employees`);
  const employers: Employer[] = await response.json();
  // console.log(employers);
  const normalizedPoste = Poste.toLowerCase();
  const EmployeesFiltred = employers.filter((e) => {
    return e.posteName.toLowerCase().includes(normalizedPoste);
  });
  return EmployeesFiltred;
}
