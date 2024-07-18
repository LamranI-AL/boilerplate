import { Employer, Sanction } from "@/_services/Interfaces";
import React from "react";
interface Props {
  sanction: Sanction;
  ouvrier: Employer;
}
function SanctionCard({ sanction, ouvrier }: Props) {
  const date = new Date(sanction.date);
  return (
    <div>
      <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
          <time className="block text-xs text-gray-500">
            {" "}
            {date.toLocaleDateString()}
          </time>

          <div>
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              {sanction.sanction}
            </h3>
            <p className="text-gray-700">{sanction.faute}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-1">
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              post : {ouvrier.posteName}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}

export default SanctionCard;
