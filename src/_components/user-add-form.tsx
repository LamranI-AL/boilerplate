"use client";
import { UserPlus } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addAdminUserAction } from "@/actions/addAdminUser";
import { adminSchema } from "@/lib/zodTypes";
import toast from "react-hot-toast";

function UserAddForm() {
  const addAdminUser = async (formData: FormData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const passwordConfirm = formData.get("passwordConfirm");
    const newInput = {
      name: name,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    };
    const result = await adminSchema.safeParse(newInput);
    if (result.success) {
      if (password === passwordConfirm) {
        const toastId = toast.loading("Waiting...");
        await addAdminUserAction(formData);
        toast.dismiss(toastId);
        toast.success("administrateur added successfully");
      } else {
        toast.error("confirme mot de passe incorrect ");
      }
    } else {
      let errorMsg = "";
      result.error?.issues.forEach((issue) => {
        errorMsg += issue.path[0] + " : " + issue.message + " . \n";
      });
      console.log(result.error?.issues, errorMsg);
      toast.error(errorMsg);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative cursor-pointer py-2 justify-center overflow-hidden items-center content-center flex rounded-lg border border-gray-100">
          <UserPlus className="text-center text-lg" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajouter un administrateur</DialogTitle>
          <DialogDescription>
            Ajouter un administrateur pour vous aider à gérer cette application,
            mais soyez responsable de lui accorder les accès nécessaires.{" "}
          </DialogDescription>
        </DialogHeader>
        <form action={addAdminUser}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                FullName
              </Label>
              <Input id="name" name="name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Email Acces
              </Label>
              <Input
                type="email"
                name="email"
                id="username"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Password
              </Label>
              <Input
                id="username"
                name="password"
                type="password"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Confirme Password
              </Label>
              <Input
                id="username"
                name="passwordConfirm"
                type="password"
                className="col-span-3"
              />
            </div>
          </div>
          <Button className="w-full mt-2" type="submit">
            Ajouter
          </Button>
        </form>

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
    // <div
    //   //   href={"#"}
    //   className="relative cursor-pointer py-2 justify-center overflow-hidden items-center content-center flex rounded-lg border border-gray-100"
    // >
    //   <UserPlus className="text-center text-lg" />
    // </div>
  );
}

export default UserAddForm;

// export function DialogDemo() {
//   return (

//   );
// }
