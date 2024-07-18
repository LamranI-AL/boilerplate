import { baseUrl } from "./GetEmployers";
import { Poste } from "./Interfaces";
// import { Sanction } from "./Interfaces";

// Fetch all employers
export async function GetPosts() {
  const response = await fetch(`${baseUrl}/api/posts`, {
    method: "GET",
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
}
export async function GetPostByIdEmploye(id: string) {
  const response = await fetch(`${baseUrl}/api/posts/${id}`, {
    method: "GET",
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
}
// Create a  newCondidate
export async function CreatePost(newPoste: Poste) {
  const response = await fetch(`${baseUrl}/api/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPoste),
  });
  const data = await response.json();
  return data;
}

// Update an existing employer
export async function UpdatePost(id: string, newPoste: Poste) {
  const response = await fetch(`${baseUrl}/api/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPoste),
  });
  const data = await response.json();
  return data;
}

// Delete an employer
export async function DeletenPost(id: string) {
  const response = await fetch(`${baseUrl}/api/posts/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}
