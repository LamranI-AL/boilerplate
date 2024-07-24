import { baseUrl } from "./GetEmployers";
import { User } from "../interfaces/Interfaces";

export async function GetAllUsers() {
  const response = await fetch(`${baseUrl}/api/users`, {
    method: "GET",
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
}
export async function GetUserByID(id: string) {
  const response = await fetch(`${baseUrl}/api/users/${id}`, {
    method: "GET",
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
}
export async function CreatUser(newUser: User) {
  const response = await fetch(`${baseUrl}/api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });
  const data = await response.json();
  return data;
}
// Update an existing users
export async function UpdateUser(id: string, newUserUpdate: User) {
  const response = await fetch(`${baseUrl}/api/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUserUpdate),
  });
  const data = await response.json();
  return data;
}

// Delete an user
export async function DeleteUser(id: string) {
  const response = await fetch(`${baseUrl}/api/users/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}
export async function getUserFromDb(email: string) {
  const response = await fetch(`${baseUrl}/api/users`);
  const users: User[] = await response.json();
  console.log(users);
  const user = users.filter((u) => {
    return u.email === email;
  });
  console.log(user[0]);
  return user[0];
}
