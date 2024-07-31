"use client";
import { DeletePoste } from "@/_services/GetPosts";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

type Props = {
  id: string;
};

function ButtonCutom({ id }: Props) {
  const router = useRouter();
  async function deletePosteFromDB() {
    await DeletePoste(id);
    toast.success("post supprimer");
    router.push(`/dashboard/list`);
  }
  return (
    <Button
      variant={"outline"}
      className="border-red-600 text-red-600 hover:text-red-800 hover:bg-red-200"
      onClick={deletePosteFromDB}
    >
      {" "}
      Supprimer
    </Button>
  );
}

export default ButtonCutom;
