import Image from "next/image";
import React from "react";
// import othmaneImg from "@/images/othmane.jpg";
import { User } from "@/_services/Interfaces";
import Link from "next/link";
interface Session {
  user: {
    name: string;
    email: string;
  };
  expires: string;
}
interface Props {
  session: Session;
  currentUser: User;
}
function UserControle({ session, currentUser }: Props) {
  // console.log(session.user.role);
  // if (session.user.role === "admin") {
  //   return;
  // }
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  };
  // console.log(getCurrentDate());
  const lastseenDate = new Date(currentUser.lastLoginDate);
  return (
    <Link
      href={`/${currentUser._id}/edit`}
      className="relative block m-24 overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
    >
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            Bonjour monsieur {session.user.name}
          </h3>

          <p className="mt-1 text-xs font-medium text-gray-600">
            {currentUser.isSuperAdmin ? "super admin " : "admin"}
          </p>
        </div>

        <div className="hidden sm:block sm:shrink-0">
          <Image
            alt=""
            src={"/othmane.jpg"}
            width={20}
            height={20}
            className="size-16 rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>

      <div className="mt-4 text-xs font-medium ">
        <p className="mt-2 text-gray-700">
          Bonjour, {session.user.name} . Vous êtes connecté en tant
          qu'administrateur. Vous avez les droits complets pour créer, lire,
          mettre à jour et supprimer les données.
        </p>
        <p className="mt-2 text-gray-500">
          Toutes les actions effectuées sont enregistrées avec les dates et les
          noms des personnes les ayant effectuées. Veuillez utiliser ces
          privilèges de manière responsable.
        </p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          {/* <dt className="text-sm font-medium text-gray-600">aujourd'hui : </dt> */}
          <dd className="text-xs text-gray-500">
            la date d'aujourd'hui :{getCurrentDate()}{" "}
          </dd>
        </div>

        <div className="flex flex-col-reverse">
          {/* <dt className="text-sm font-medium text-gray-600">
            derniere login :{" "}
          </dt> */}
          <dd className="text-xs text-gray-500">
            derniere login : {lastseenDate.toLocaleTimeString().toString()}
          </dd>
        </div>
      </dl>
    </Link>
  );
}

export default UserControle;
