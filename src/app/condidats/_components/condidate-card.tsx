import { Condidate } from "@/interfaces/Interfaces";
import React from "react";
interface CondidateCardProps {
  condidate: Condidate;
}
function CondidateCard({ condidate }: CondidateCardProps) {
  const dateNaissance = new Date(condidate.dateNaissance);
  return (
    <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-md">
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Nom</dt>
          <dd className="text-gray-700 sm:col-span-2">{condidate.firstName}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Prénom</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {condidate.lastName.toUpperCase()}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">CIN</dt>
          <dd className="text-gray-700 sm:col-span-2">{condidate.CIN}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Téléphone</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {condidate.phoneNumber}
          </dd>
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
            {condidate.email.length !== 0 ? (
              condidate.email
            ) : (
              <p>en attend l'email ...</p>
            )}
          </dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Poste occupé</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {condidate.posteApplique}
          </dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">cree par : </dt>
          <dd className="text-gray-700 sm:col-span-2">{condidate.creatUser}</dd>
        </div>
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">
            dernier mise à jour par :{" "}
          </dt>
          <dd className="text-gray-700 sm:col-span-2">
            {condidate.UserApdate
              ? condidate.UserApdate
              : "pas encore mise à jour"}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Comment passer le test</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {condidate.motifApply.length !== 0 ? (
              condidate.motifApply
            ) : (
              <p>
                en attend un raison ou bien motivation de ocuppe le poste{" "}
                {condidate.posteApplique} ...
              </p>
            )}
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default CondidateCard;
