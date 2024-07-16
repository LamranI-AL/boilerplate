import React from "react";
interface Session {
  user: {
    name: string;
    email: string;
    password: string;
    role: string;
  };
  expires: string;
}
interface Props {
  session: Session;
}
function UserControle({ session }: Props) {
  console.log(session.user.role);
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

  console.log(getCurrentDate());
  return (
    <div
      // href="#"
      className="relative block m-24 overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
    >
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            Bonjour monsieur {session.user.name}
          </h3>

          <p className="mt-1 text-xs font-medium text-gray-600">admin</p>
        </div>

        <div className="hidden sm:block sm:shrink-0">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
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
            aujourd'hui :{getCurrentDate()}{" "}
          </dd>
        </div>

        {/* <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Reading time</dt>
          <dd className="text-xs text-gray-500">3 minute</dd>
        </div> */}
      </dl>
    </div>
  );
}

export default UserControle;
