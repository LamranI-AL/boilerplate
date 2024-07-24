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

interface Props {
  post: Poste;
}
export default function PostCard({ post }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PostSlice post={post} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
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
            <Input id="name" defaultValue={post.name} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              date d'occupation
            </Label>
            <Input type="date" id="username" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              date de fin
            </Label>
            <Input type="date" id="username" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              motif de augmenté la promotion
            </Label>
            <Textarea
              id="username"
              defaultValue={post.motifDebut}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <ButtonCutom id={post._id} />
          <Button type="submit">Enregistre</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
