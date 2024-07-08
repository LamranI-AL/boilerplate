"use client";
import { CreateEmployer, GetEmployers } from "@/_services/GetEmployers";
import { Employer, Errors, Field } from "@/_services/Interfaces";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
interface AddOuvrierProps {
  typeOfEmployee: string;
}
const AddOuvrier = ({ typeOfEmployee }: AddOuvrierProps) => {
  const champs: Field[] = [
    { nom: "nom", type: "text", label: "Nom", value: "" },
    { nom: "prenom", type: "text", label: "Prénom", value: "" },
    { nom: "cin", type: "text", label: "CIN", value: "" },
    { nom: "telephone", type: "text", label: "Téléphone", value: "" },
    {
      nom: "date-naissance",
      type: "date",
      label: "Date de naissance",
      value: "",
    },
    { nom: "poste", type: "text", label: "Poste occupé", value: "" },
  ];

  const [errors, setErrors] = useState<Errors>({});
  const [isDesplyEroors, setIsDesplyEroors] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const FerstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const cinRef = useRef<HTMLInputElement>(null);
  const dateNaissanceRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const posteRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    FerstNameRef.current?.focus();
    getData();
  }, []);

  const getData = () => {
    setErrors({});
    const FerstName = FerstNameRef.current?.value || "";
    const lastName = lastNameRef.current?.value || "";
    const cin = cinRef.current?.value || "";
    const dateNaissance = dateNaissanceRef.current?.value || "";
    const phoneNumber = phoneNumberRef.current?.value || "";
    const poste = posteRef.current?.value || "";

    if (FerstName.trim() === "") {
      setErrors((prevStat) => {
        return { ...prevStat, nom: "Le champ nom est requis" };
      });
    }
    if (lastName.trim() === "") {
      setErrors((prevStat) => {
        return { ...prevStat, prenom: "Le champ prénom est requis" };
      });
    }
    if (cin.trim() === "") {
      setErrors((prevStat) => {
        return { ...prevStat, cin: "Le champ CIN est requis" };
      });
    }
    if (phoneNumber.trim() === "") {
      setErrors((prevStat) => {
        return { ...prevStat, telephone: "Le champ téléphone est requis" };
      });
    }
    if (dateNaissance.trim() === "") {
      setErrors((prevStat) => {
        return {
          ...prevStat,
          "date-naissance": "Le champ date de naissance est requis",
        };
      });
    }
    if (poste.trim() === "") {
      setErrors((prevStat) => {
        return {
          ...prevStat,
          poste: "Le champ poste occupé est requis",
        };
      });
    }
  };

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDesplyEroors(true);
    getData();
    if (Object.keys(errors).length === 0) {
      creatUser();
      resetForm();
      setShowSuccessAlert(true);
      setTimeout(() => setShowSuccessAlert(false), 3000); // Cache l'alerte après 3 secondes
    }
  };

  const creatUser = async () => {
    const newOuvrier: Employer = {
      CIN: cinRef.current?.value ?? "",
      FerstName: FerstNameRef.current?.value ?? "",
      lastName: lastNameRef.current?.value ?? "",
      role: "user",
      phoneNumber: phoneNumberRef.current?.value ?? "",
      dateNaissance: new Date(dateNaissanceRef.current?.value ?? ""),
      email: "", // à remplir selon vos besoins
      posteName: posteRef.current?.value ?? "",
      isRejected: false,
      isArchive: false,
      raison: "",
      createdAt: new Date(),
      updateAt: new Date(),
      dateSuppression: new Date(""), // ou null si non applicable
      dateArchivage: new Date(""), // ou null si non applicable
      dateReactivation: new Date(""),
    };
    console.log(newOuvrier);
    await CreateEmployer(newOuvrier);
  };

  const resetForm = () => {
    if (FerstNameRef.current) FerstNameRef.current.value = "";
    if (lastNameRef.current) lastNameRef.current.value = "";
    if (cinRef.current) cinRef.current.value = "";
    if (dateNaissanceRef.current) dateNaissanceRef.current.value = "";
    if (phoneNumberRef.current) phoneNumberRef.current.value = "";
    if (posteRef.current) posteRef.current.value = "";
  };

  const getError = (feildName: string) => {
    return errors[feildName];
  };

  const hasError = (feildName: string) => {
    return getError(feildName) !== undefined;
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Ajouter un ouvrier
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Entrez toutes les informations de l'ouvrier
        </p>
        {showSuccessAlert && (
          <div className="mb-4 rounded-lg bg-green-500 p-4 text-white text-center">
            L'ouvrier a été ajouté avec succès !
          </div>
        )}

        <form
          onSubmit={handelSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            Les informations de l'ouvrier
          </p>
          {champs.map((champsItem) => {
            const ref = (() => {
              switch (champsItem.nom) {
                case "nom":
                  return FerstNameRef;
                case "prenom":
                  return lastNameRef;
                case "cin":
                  return cinRef;
                case "telephone":
                  return phoneNumberRef;
                case "date-naissance":
                  return dateNaissanceRef;
                case "poste":
                  return posteRef;
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
                  <input
                    ref={ref}
                    id={champsItem.nom}
                    type={champsItem.type}
                    className={`w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm ${
                      hasError(champsItem.nom) ? "border-red-500" : ""
                    }`}
                    placeholder={`Entrez ${champsItem.label}`}
                  />
                  {isDesplyEroors && hasError(champsItem.nom) && (
                    <div className="text-red-500">
                      {getError(champsItem.nom)}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Ajouter
          </button>

          <p className="text-center text-sm text-gray-500">
            Un problème?
            <Link className="underline" href="/supportContact">
              Contacter le support
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AddOuvrier;
