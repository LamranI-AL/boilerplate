import { User } from "@/interfaces/Interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  user: User;
}
function UserSlice({ user }: Props) {
  const lastSeen = new Date(user.lastLoginDate);
  return (
    <Link
      href={`/${user._id}/edit`}
      className="relative block  overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
    >
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          {user && (
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              monsieur {user.name.toLowerCase()}
            </h3>
          )}

          <p className="mt-1 text-xs font-medium text-gray-600">
            {user && "admin"}
          </p>
        </div>

        <div className="hidden sm:block sm:shrink-0">
          <Image
            alt=""
            width={20}
            height={20}
            src={"/momare.jpg"}
            className="size-16 rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>

      <div className="mt-4 text-xs font-medium ">
        <p className="mt-2 text-gray-700">
          {user.name.toLowerCase()} connecté en tant qu'administrateur. il est
          les droits complets pour créer, lire, mettre à jour et supprimer les
          données.
        </p>
        <p className="mt-2 text-gray-500">
          Toutes les actions effectuées sont enregistrées avec les dates et les
          noms des personnes les ayant effectuées.
        </p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          {/* <dt className="text-sm font-medium text-gray-600">derniere login </dt> */}
          <dd className="text-xs text-gray-500">
            derniere login : {lastSeen.toDateString().toString()} /{" "}
            {lastSeen.toLocaleTimeString().toString()}
          </dd>
        </div>
      </dl>
    </Link>
  );
}

export default UserSlice;
