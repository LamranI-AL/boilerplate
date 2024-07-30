"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GetAllUsers, getUserFromDb } from "@/_services/GetCurrentUser";
import { Session, User } from "@/interfaces/Interfaces";
interface Props {
  session: Session;
}

function DrawerContentSlice({ session }: Props) {
  const [users, setUsers] = React.useState<User[]>([]);
  const [selectedUser, setSelectedUser] = React.useState<User>({} as User);
  const getUsers = async () => await GetAllUsers().then((res) => setUsers(res));
  React.useEffect(() => {
    getUsers();
    GetCurrentUser();
  }, []);
  const GetCurrentUser = async () => {
    const currentUser: User = await getUserFromDb(
      session.user?.email as string
    );
    setSelectedUser(currentUser);
  };
  // setUsers(users.filter((u) => u.name !== selectedUser.name));
  const filtredUsers = users.filter((u) => u.name !== selectedUser.name);

  console.log(selectedUser);
  return (
    <Tabs className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        {filtredUsers &&
          filtredUsers.map((user) => {
            return (
              <TabsTrigger key={user.name} value={user.name}>
                {user.name.slice(0, user.name.indexOf(" "))}
              </TabsTrigger>
            );
          })}
      </TabsList>
      {filtredUsers &&
        filtredUsers.map((user) => {
          const lastSeen = new Date(user.lastLoginDate);
          return (
            <TabsContent value={user.name} key={user.name}>
              <Card>
                <CardHeader>
                  <CardTitle>chat</CardTitle>
                  <CardDescription>
                    Dernière connexion : {lastSeen.toLocaleTimeString()}{" "}
                    {lastSeen.toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@peduarte" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          );
        })}
    </Tabs>
  );
}

export default DrawerContentSlice;
