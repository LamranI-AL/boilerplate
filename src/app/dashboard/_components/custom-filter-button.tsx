"use client";
import { Button } from "@/components/ui/button";
import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { Filter, User } from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GetEmployersByPost } from "@/_services/GetPosts";
type Props = {
  newPostesNonRep: string[];
};
const handleChange = async (formData: FormData) => {
  // "use server";
  const value = formData.get("value") as string;
  console.log(value);
  const employers = await GetEmployersByPost(value);
  console.log(employers);
  // employersActive = employers;
  return employers;
  // let valuee = "";
  // valuee = value;
  // console.log(valuee);
};

function ButtonFilter({ newPostesNonRep }: Props) {
  return (
    <form action={handleChange} className="flex">
      <div className="w-full">
        <Select name="value">
          <SelectTrigger className="w-[180px]">
            {" "}
            <Filter className="text-sm" />
            <SelectValue placeholder="Select a poste" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="flex">Postes</SelectLabel>
              {newPostesNonRep.map((poste) => {
                return <SelectItem value={poste}>{poste}</SelectItem>;
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="mx-2">
        Submit
      </Button>
    </form>
  );
}

export default ButtonFilter;
