"use client";
import { Poste } from "@/interfaces/Interfaces";
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
import { Textarea } from "@/components/ui/textarea";
import PostSlice from "./post-slice";
import ButtonCutom from "./custom-delete-button";
import { useRouter } from "next/navigation";
import { UpdatePost } from "@/_services/GetPosts";

interface Props {
  post: Poste;
}
export default function PostCard({ post }: Props) {
  const router = useRouter();
  const updatePostee = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const dateDebut = formData.get("dateDebut") as string;
    const dateFin = formData.get("dateFin") as string;
    const motif = formData.get("motif") as string;
    const updatedPoste: Poste = {
      ...post,
      dateDebute: new Date(dateDebut),
      dateFin: new Date(dateFin),
      motifDebut: motif,
      name: name,
    };
    await UpdatePost(post._id, updatedPoste);
    router.push(`/dashboard/${post.EmployerId}/view`);
    console.log(name, dateDebut, dateFin, motif);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <PostSlice post={post} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={updatePostee}>
          <DialogHeader>
            <DialogTitle>Mettre a jour poste</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                le poste
              </Label>
              <Input
                id="name"
                name="name"
                defaultValue={post.name}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                date d'occupation
              </Label>
              <Input
                type="date"
                name="dateDebut"
                id="username"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                date de fin
              </Label>
              <Input
                type="date"
                name="dateFin"
                id="username"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                motif de augmenté la promotion
              </Label>
              <Textarea
                id="username"
                name="motif"
                defaultValue={post.motifDebut}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <ButtonCutom id={post._id} />
            <Button type="submit">Enregistre</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
