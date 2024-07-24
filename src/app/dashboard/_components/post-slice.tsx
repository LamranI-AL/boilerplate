import { Poste } from "@/interfaces/Interfaces";
import React from "react";
interface Props {
  post: Poste;
}
async function PostSlice({ post }: Props) {
  const date = new Date(post.dateDebute);
  const dateFin = new Date(post.dateFin === null ? "" : post.dateFin);
  return (
    <div>
      <article className="hover:animate-background rounded-xl bg-gradient-to-r cursor-pointer from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
          <div className="block text-xs font-medium text-gray-800">
            {"date d'occupation : "}
            {date.toLocaleDateString().toString()}
          </div>
          <div className="block text-xs text-gray-800">
            {"date de quite: "}
            {dateFin.toLocaleDateString().toString()}
          </div>

          <div>
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              {post.name}
            </h3>
            <p className="text-gray-500 text-sm">{post.motifDebut}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-1">
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              CIN : {post.EmployerCIN}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}

export default PostSlice;
