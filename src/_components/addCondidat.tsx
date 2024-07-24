"use client";
import { CreateCondidate, GetCondidates } from "@/_services/GetCondidats";
import { Condidate, Errors, Field, Session } from "@/interfaces/Interfaces";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import AlertSucces from "./alertSucces";
// import ButtonLoader from "./ButtonLoader";
// // import { useSession } from "next-auth/react";
interface Props {
  session: Session;
}
const AddCondidate = ({ session }: Props) => {
  const champs: Field[] = [
    { nom: "nom", type: "text", label: "Nom", value: "" },
    { nom: "prenom", type: "text", label: "Prénom", value: "" },
    { nom: "cin", type: "text", label: "CIN", value: "" },
    { nom: "email", type: "email", label: "Email", value: "" },
    { nom: "telephone", type: "text", label: "Téléphone", value: "" },
    {
      nom: "date-naissance",
      type: "date",
      label: "Date de naissance",
      value: "",
    },
    { nom: "poste", type: "text", label: "Poste appliqué", value: "" },
    { nom: "motif", type: "text", label: "Motif d'application", value: "" },
  ];

  const [errors, setErrors] = useState<Errors>({});
  const [isDesplyEroors, setIsDesplyEroors] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showDnagerAlert, setShowDangerAlert] = useState(false);
  const [isloading, setLoading] = useState(false);

  const FerstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const cinRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const dateNaissanceRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const posteRef = useRef<HTMLInputElement>(null);
  const motifRef = useRef<HTMLInputElement>(null);
  const isSucceededRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  useEffect(() => {
    FerstNameRef.current?.focus();
    getData();
  }, []);

  const getData = () => {
    setErrors({});
    const FerstName = FerstNameRef.current?.value || "";
    const lastName = lastNameRef.current?.value || "";
    const cin = cinRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const dateNaissance = dateNaissanceRef.current?.value || "";
    const phoneNumber = phoneNumberRef.current?.value || "";
    const poste = posteRef.current?.value || "";
    const motif = motifRef.current?.value || "";

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
    if (email.trim() === "") {
      setErrors((prevStat) => {
        return { ...prevStat, email: "Le champ email est requis" };
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
          poste: "Le champ poste appliqué est requis",
        };
      });
    }
    if (motif.trim() === "") {
      setErrors((prevStat) => {
        return {
          ...prevStat,
          motif: "Le champ motif d'application est requis",
        };
      });
    }
  };

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    setIsDesplyEroors(true);
    getData();
    if (Object.keys(errors).length === 0) {
      creatUser();
      resetForm();
      setTimeout(() => setShowSuccessAlert(false), 3000); // Cache l'alerte après 3 secondes

      router.push("/condidats/list");
    } else {
      setShowDangerAlert(true);
      setTimeout(() => setShowDangerAlert(false), 3000); // Cache l'alerte après
      setLoading(false);
    }
  };

  const creatUser = async () => {
    const newCondidate: Condidate = {
      CIN: cinRef.current?.value ?? "",
      firstName: FerstNameRef.current?.value ?? "",
      lastName: lastNameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      phoneNumber: phoneNumberRef.current?.value ?? "",
      dateNaissance: new Date(dateNaissanceRef.current?.value ?? ""),
      posteApplique: posteRef.current?.value ?? "",
      dateApplication: new Date(),
      motifApply: motifRef.current?.value ?? "",
      isSucceeded: isSucceededRef.current?.checked ?? false,
      creatDate: new Date(Date.now()),
      updateDate: new Date(""),
      creatUser: session.user.name,
      deleteDate: new Date(""),
      UserApdate: "",
      UserDelete: "",
    };
    console.log(newCondidate);
    await CreateCondidate(newCondidate);
    setLoading(false);
    setShowSuccessAlert(true);
  };

  const resetForm = () => {
    if (FerstNameRef.current) FerstNameRef.current.value = "";
    if (lastNameRef.current) lastNameRef.current.value = "";
    if (cinRef.current) cinRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (dateNaissanceRef.current) dateNaissanceRef.current.value = "";
    if (phoneNumberRef.current) phoneNumberRef.current.value = "";
    if (posteRef.current) posteRef.current.value = "";
    if (motifRef.current) motifRef.current.value = "";
    if (isSucceededRef.current) isSucceededRef.current.checked = false;
  };

  const getError = (feildName: string) => {
    return errors[feildName];
  };

  const hasError = (feildName: string) => {
    return getError(feildName) !== undefined;
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 mt-5 sm:px-6 lg:px-20 ">
      <div className="mx-24 px-48 ">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Ajouter un candidat
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Entrez toutes les informations du candidat
        </p>

        <form
          onSubmit={handelSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          {champs.map((champsItem) => {
            const ref = (() => {
              switch (champsItem.nom) {
                case "nom":
                  return FerstNameRef;
                case "prenom":
                  return lastNameRef;
                case "cin":
                  return cinRef;
                case "email":
                  return emailRef;
                case "telephone":
                  return phoneNumberRef;
                case "date-naissance":
                  return dateNaissanceRef;
                case "poste":
                  return posteRef;
                case "motif":
                  return motifRef;
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

          <div>
            <label
              htmlFor="isSucceeded"
              className="text-gray-600 font-bold p-2"
            >
              Réussi le test ?
            </label>
            <div className="relative p-5  shadow-sm bg-gray-200">
              <input
                ref={isSucceededRef}
                id="isSucceeded"
                type="checkbox"
                className="w-full rounded-lg shadow-sm "
              />
              <p className="w-full text-center ">oui?</p>
            </div>
          </div>

          {/* <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Ajouter
          </button> */}
          <button
            type="submit"
            // onClick={handleLogin}
            disabled={isloading}
            className={`flex w-full items-center justify-center p-2 bg-green-600 text-white rounded ${
              isloading ? "cursor-not-allowed" : "hover:bg-green-700"
            }`}
          >
            {isloading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : (
              "ajouter"
            )}
          </button>
          {/* <ButtonLoader isloading={isloading} title="ajouter" /> */}
          {showSuccessAlert && (
            <div>
              <div className="mb-4 rounded-lg bg-green-500 p-4 text-white text-center">
                Le candidat a été ajouté avec succès !
              </div>
              <AlertSucces
                title="succès"
                description=" Le candidat a été ajouté avec succès !"
              />
            </div>
          )}
          {showDnagerAlert && (
            <div>
              <div className="mb-4 rounded-lg bg-red-500 p-4 text-white text-center">
                Un problème est survenu lors de la saisie des informations
              </div>
              <AlertSucces
                title="Échec"
                description="Le candidat n'a pas été ajouté !"
              />
            </div>
          )}

          <p className="text-center text-sm text-gray-500">
            Un problème?
            <Link className="underline" href="/">
              Contacter nous
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AddCondidate;
