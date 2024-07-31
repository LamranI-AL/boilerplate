import { GetPostByIdEmploye } from "@/_services/GetPosts";
import { Employer, Poste } from "@/interfaces/Interfaces";
import React from "react";
import PostCard from "./post-card";
interface Props {
  ouvrier: Employer;
}
async function PostArchive({ ouvrier }: Props) {
  const postes: Poste[] = await GetPostByIdEmploye(ouvrier._id);
  return (
    <div>
      {postes.length !== 0 && (
        <ul className="mt-8 grid gap-4 m-5 sm:grid-cols-2 lg:grid-cols-3">
          {postes.map((P) => {
            return <PostCard post={P} />;
          })}
        </ul>
      )}
      {postes.length === 0 && (
        <div className="text-center">
          dernier port occupee pour ce moncieur est{" "}
          <span className="font-bold ">{ouvrier.posteName}</span>
          <div className="text-green-500 text-center font-bold ">
            pas de archive des postes a ce monsieur : {ouvrier.FerstName}{" "}
            {ouvrier.lastName}
          </div>
        </div>
      )}
    </div>
  );
}

export default PostArchive;
