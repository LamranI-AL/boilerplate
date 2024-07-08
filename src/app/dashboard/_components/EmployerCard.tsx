import { Employer, Field } from "@/_services/Interfaces";
import React from "react";
interface EmployerCardProps {
  employer: Employer;
}
function EmployerCard({ employer }: EmployerCardProps) {
  const dateNaissance = new Date(employer.dateNaissance);
  return (
    <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Nom</dt>
          <dd className="text-gray-700 sm:col-span-2">{employer.FerstName}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Prénom</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {employer.FerstName.toUpperCase()}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">CIN</dt>
          <dd className="text-gray-700 sm:col-span-2">{employer.CIN}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Téléphone</dt>
          <dd className="text-gray-700 sm:col-span-2">$1,000,000+</dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Date de naissance</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {dateNaissance.toLocaleDateString().toString()}
          </dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Email</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {employer.email.length !== 0 ? (
              employer.email
            ) : (
              <p>en attend l'email ...</p>
            )}
          </dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Poste occupé</dt>
          <dd className="text-gray-700 sm:col-span-2">{employer.posteName}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">motif de post occupé</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {employer.raison.length !== 0 ? (
              employer.raison
            ) : (
              <p>
                en attend un raison ou bien motivation de ocuppe le poste{" "}
                {employer.posteName} ...
              </p>
            )}
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default EmployerCard;
