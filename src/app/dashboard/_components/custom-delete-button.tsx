import { DeletePoste } from "@/_services/GetPosts";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  id: string;
};

function ButtonCutom({ id }: Props) {
  async function deletePosteFromDB() {
    await DeletePoste(id);
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
