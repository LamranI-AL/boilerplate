"use client";
import { GetEmployerById, UpdateEmployer } from "@/_services/GetEmployers";
import { Employer, Errors, Field } from "@/_services/Interfaces";
import React, { useEffect, useRef, useState } from "react";
const UpdateEmployerSlice: React.FC<{ employerId: number }> = ({
  employerId,
}) => {
  const champs: Field[] = [
    { nom: "nom", type: "text", label: "Nom", value: "" },
    { nom: "prenom", type: "text", label: "Prénom", value: "" },
    { nom: "telephone", type: "text", label: "Téléphone", value: "" },
    // },
    { nom: "email", type: "email", label: "Email", value: "" },
    { nom: "poste", type: "text", label: "Poste occupé", value: "" },
    {
      nom: "poste-motif",
      type: "text",
      label: "motif de poste occupé",
      value: "",
    },
    { nom: "role", type: "text", label: "Rôle", value: "" },
  ];

  const [employer, setEmployer] = useState<Employer | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [isDesplyEroors, setIsDesplyEroors] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const FerstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const posteRef = useRef<HTMLInputElement>(null);
  const motifPosteRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    FerstNameRef.current?.focus();
    fetchEmployer();
  }, [employerId]);

  const fetchEmployer = async () => {
    const fetchedEmployer: Employer = await GetEmployerById(
      employerId.toString()
    );
    setEmployer(fetchedEmployer);
    if (fetchedEmployer) {
      if (FerstNameRef.current)
        FerstNameRef.current.value = fetchedEmployer.FerstName;
      if (lastNameRef.current)
        lastNameRef.current.value = fetchedEmployer.lastName;
      if (phoneNumberRef.current)
        phoneNumberRef.current.value = fetchedEmployer.phoneNumber;
      if (emailRef.current) emailRef.current.value = fetchedEmployer.email;
      if (posteRef.current) posteRef.current.value = fetchedEmployer.posteName;
      if (motifPosteRef.current)
        motifPosteRef.current.value = fetchedEmployer.raison;
      if (roleRef.current) roleRef.current.value = fetchedEmployer.role;
    }
  };

  const getData = () => {
    setErrors({});
    const FerstName = FerstNameRef.current?.value || "";
    const lastName = lastNameRef.current?.value || "";
    const phoneNumber = phoneNumberRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const poste = posteRef.current?.value || "";
    const raison = motifPosteRef.current?.value || "";
    const role = roleRef.current?.value || "";
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
    if (phoneNumber.trim() === "") {
      setErrors((prevStat) => {
        return {
          ...prevStat,
          prenom: "Le champ numro de telephone est requis",
        };
      });
    }
    if (email.trim() === "") {
      setErrors((prevStat) => {
        return { ...prevStat, email: "Le champ email est requis" };
      });
    }
    if (poste.trim() === "") {
      setErrors((prevStat) => {
        return { ...prevStat, poste: "Le champ poste occupé est requis" };
      });
    }
    if (role.trim() === "") {
      setErrors((prevStat) => {
        return { ...prevStat, role: "Le champ rôle est requis" };
      });
    }
    if (raison.trim() === "") {
      setErrors((prevStat) => {
        return { ...prevStat, role: "Le champ raison est requis" };
      });
    }
  };

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsloading(true);
    setIsDesplyEroors(true);
    getData();
    if (Object.keys(errors).length === 0) {
      updateUser();
      setShowSuccessAlert(true);
      setTimeout(() => setShowSuccessAlert(false), 3000); // Cache l'alerte après 3 secondes
    }
  };

  const updateUser = () => {
    if (!employer) return;
    const updatedEmployer: Employer = {
      FerstName: FerstNameRef.current?.value ?? employer.FerstName,
      lastName: lastNameRef.current?.value ?? employer.lastName,
      CIN: employer.CIN,
      role: roleRef.current?.value.toLocaleLowerCase() ?? employer.role,
      phoneNumber: phoneNumberRef.current?.value ?? employer.phoneNumber,
      dateNaissance: new Date(employer.dateNaissance),
      email: emailRef.current?.value ?? employer.email,
      posteName: posteRef.current?.value ?? employer.posteName,
      updateAt: new Date(""),
      isArchive: employer.isArchive,
      isRejected: employer.isRejected,
      raison: motifPosteRef.current?.value ?? "",
      createdAt: new Date(""),
      dateSuppression: new Date(""),
      dateArchivage: new Date(""),
      dateReactivation: new Date(""),
    };
    console.log(updatedEmployer);
    // envoyer les données à votre serveur
    UpdateEmployer(employerId.toString(), updatedEmployer);
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
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Mettre à jour un employé
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Mettez à jour les informations de l'employé
        </p>
        {showSuccessAlert && (
          <div className="mb-4 rounded-lg bg-green-500 p-4 text-white text-center">
            L'employé a été mis à jour avec succès !
          </div>
        )}

        <form
          onSubmit={handelSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            {employer?.FerstName} {employer?.lastName}
          </p>

          {champs.map((champsItem) => {
            const ref = (() => {
              switch (champsItem.nom) {
                case "nom":
                  return FerstNameRef;
                case "prenom":
                  return lastNameRef;
                // case "cin":
                //   return cinRef;
                case "telephone":
                  return phoneNumberRef;
                case "poste-motif":
                  return motifPosteRef;
                case "email":
                  return emailRef;
                case "poste":
                  return posteRef;
                case "role":
                  return roleRef;
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
                      className={`w-full rounded-lg  border-gray-200 p-4 pe-12 text-sm shadow-sm ${
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

export default UpdateEmployerSlice;
