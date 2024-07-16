"use client";
import { GetCondidateById, UpdateCondidate } from "@/_services/GetCondidats";
import { Condidate, Errors, Field, Session } from "@/_services/Interfaces";

import React, { useEffect, useRef, useState } from "react";
import AlertSucces from "./alertSucces";

interface Props {
  CondidatId: string;
  session: Session;
}

const UpdateCondidateSlice = ({ CondidatId, session }: Props) => {
  const champs: Field[] = [
    { nom: "firstName", type: "text", label: "Prénom", value: "" },
    { nom: "lastName", type: "text", label: "Nom", value: "" },
    { nom: "CIN", type: "text", label: "CIN", value: "" },
    { nom: "email", type: "email", label: "Email", value: "" },
    { nom: "phoneNumber", type: "text", label: "Téléphone", value: "" },
    { nom: "posteApplique", type: "text", label: "Poste appliqué", value: "" },
    {
      nom: "motifApply",
      type: "text",
      label: "Motif d'application",
      value: "",
    },
  ];

  const [condidatee, setCondidate] = useState<Condidate | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [isDesplyEroors, setIsDesplyEroors] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const cinRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const posteAppliqueRef = useRef<HTMLInputElement>(null);
  const motifApplyRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstNameRef.current?.focus();
    fetchCondidate();
  }, [CondidatId]);

  const fetchCondidate = async () => {
    console.log(CondidatId);
    const condidate: Condidate = await GetCondidateById(CondidatId);
    console.log(condidate);
    setCondidate(condidate);
    if (condidate) {
      if (firstNameRef.current)
        firstNameRef.current.value = condidate.firstName;
      if (lastNameRef.current) lastNameRef.current.value = condidate.lastName;
      if (cinRef.current) cinRef.current.value = condidate.CIN;
      if (phoneNumberRef.current)
        phoneNumberRef.current.value = condidate.phoneNumber;
      if (emailRef.current) emailRef.current.value = condidate.email;
      if (posteAppliqueRef.current)
        posteAppliqueRef.current.value = condidate.posteApplique;
      if (motifApplyRef.current)
        motifApplyRef.current.value = condidate.motifApply;
    }
  };

  const getData = () => {
    setErrors({});
    const firstName = firstNameRef.current?.value || "";
    const lastName = lastNameRef.current?.value || "";
    const CIN = cinRef.current?.value || "";
    const phoneNumber = phoneNumberRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const posteApplique = posteAppliqueRef.current?.value || "";
    const motifApply = motifApplyRef.current?.value || "";

    if (firstName.trim() === "") {
      setErrors((prevStat) => {
        return { ...prevStat, firstName: "Le champ prénom est requis" };
      });
    }
    if (lastName.trim() === "") {
      setErrors((prevStat) => {
        return { ...prevStat, lastName: "Le champ nom est requis" };
      });
    }
    if (CIN.trim() === "") {
      setErrors((prevStat) => {
        return { ...prevStat, CIN: "Le champ CIN est requis" };
      });
    }
    if (phoneNumber.trim() === "") {
      setErrors((prevStat) => {
        return {
          ...prevStat,
          phoneNumber: "Le champ numéro de téléphone est requis",
        };
      });
    }
    if (email.trim() === "") {
      setErrors((prevStat) => {
        return { ...prevStat, email: "Le champ email est requis" };
      });
    }
    if (posteApplique.trim() === "") {
      setErrors((prevStat) => {
        return {
          ...prevStat,
          posteApplique: "Le champ poste appliqué est requis",
        };
      });
    }
    if (motifApply.trim() === "") {
      setErrors((prevStat) => {
        return {
          ...prevStat,
          motifApply: "Le champ motif d'application est requis",
        };
      });
    }
  };

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDesplyEroors(true);
    getData();
    if (Object.keys(errors).length === 0) {
      updateCondidate();
      setShowSuccessAlert(true);
      setTimeout(() => setShowSuccessAlert(false), 3000); // Cache l'alerte après 3 secondes
    }
  };

  const updateCondidate = () => {
    if (!condidatee) return;
    const updatedCondidate: Condidate = {
      ...condidatee,
      firstName: firstNameRef.current?.value ?? condidatee.firstName,
      lastName: lastNameRef.current?.value ?? condidatee.lastName,
      CIN: cinRef.current?.value ?? condidatee.CIN,
      phoneNumber: phoneNumberRef.current?.value ?? condidatee.phoneNumber,
      dateNaissance: new Date(condidatee.dateNaissance),
      email: emailRef.current?.value ?? condidatee.email,
      posteApplique:
        posteAppliqueRef.current?.value ?? condidatee.posteApplique,
      motifApply: motifApplyRef.current?.value ?? condidatee.motifApply,
      updateDate: new Date(Date.now()),
      UserApdate: session.user.name ?? "",
    };
    console.log(updatedCondidate);
    UpdateCondidate(CondidatId, updatedCondidate);
  };

  const hasError = (fieldName: string): boolean => {
    return Boolean(errors[fieldName]);
  };

  const getError = (fieldName: string): string => {
    return errors[fieldName] || "";
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 mt-5 sm:px-6 lg:px-8">
      <div className="mx-14">
        {condidatee?.UserApdate && (
          <AlertSucces
            title="important"
            description={`user chnage par : ${condidatee?.UserApdate} , en ${condidatee?.updateDate}`}
          />
        )}

        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Mettre à jour un candidat
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Mettez à jour les informations du candidat
        </p>
        {showSuccessAlert && (
          <div className="mb-4 rounded-lg bg-green-500 p-4 text-white text-center">
            Le candidat a été mis à jour avec succès !
          </div>
        )}

        <form
          onSubmit={handelSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            {condidatee?.firstName} {condidatee?.lastName}
          </p>

          {champs.map((champsItem) => {
            const ref = (() => {
              switch (champsItem.nom) {
                case "firstName":
                  return firstNameRef;
                case "lastName":
                  return lastNameRef;
                case "CIN":
                  return cinRef;
                case "telephone":
                  return phoneNumberRef;
                case "motifApply":
                  return motifApplyRef;
                case "email":
                  return emailRef;
                case "posteApplique":
                  return posteAppliqueRef;
                default:
                  return undefined;
              }
            })();

            return (
              <div key={champsItem.nom}>
                <label
                  htmlFor={champsItem.nom}
                  className="text-gray-600 font-bold p-2"
                >
                  {champsItem.label}
                </label>

                <div className="relative">
                  {champsItem.nom === "isRejected" ? (
                    <input
                      ref={ref}
                      id={champsItem.nom}
                      type={champsItem.type}
                      className={`w-full rounded-lg bg-gray-100 border-gray-200 p-4 pe-12 text-sm shadow-sm ${
                        hasError(champsItem.nom) ? "border-red-500" : ""
                      }`}
                      placeholder={`Entrez ${champsItem.label}`}
                      defaultChecked={champsItem.value === "true"}
                    />
                  ) : (
                    <input
                      ref={ref}
                      id={champsItem.nom}
                      type={champsItem.type}
                      className={`w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm ${
                        hasError(champsItem.nom) ? "border-red-500" : ""
                      }`}
                      placeholder={`Entrez ${champsItem.label}`}
                    />
                  )}
                  {isDesplyEroors && hasError(champsItem.nom) && (
                    <div className="text-red-500">
                      {getError(champsItem.nom)}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          <div className="flex flex-col">
            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Mettre à jour
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCondidateSlice;
