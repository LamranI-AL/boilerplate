"use client";
import { creatCondidateAction } from "@/actions/creatCondidateAction";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { condidatSchema } from "@/lib/zodTypes";
import { UserPlusIcon } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
const AddCondidate = () => {
  const creatCondidat = async (formData: FormData) => {
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const CIN = formData.get("CIN");
    const phone = formData.get("phone");
    const date_naissance = formData.get("date_naissance") as string;
    const poste = formData.get("poste");
    const motif = formData.get("motif");
    const success_accept = formData.get("success_accept");
    const input = {
      first_name,
      last_name,
      CIN,
      phone,
      date_naissance,
      poste,
      motif,
      success_accept,
    };
    console.log(input);
    // validation
    const result = condidatSchema.safeParse(input);
    if (result.success) {
      const toastId = toast.loading("Waiting...");
      await creatCondidateAction(formData).then(() => {
        toast.dismiss(toastId);
        toast.success("Ouvrier ajouté avec succès");
      });
      console.log("good ");
    } else {
      let errorMsg = "";
      result.error.issues.forEach((issue) => {
        errorMsg += issue.path[0] + " : " + issue.message + " . \n";
      });
      toast.error(errorMsg);
    }
  };
  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <Image
              alt=""
              width={1000}
              height={1000}
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <a className="block" href="#">
                <span className="sr-only">add</span>
                <UserPlusIcon />
              </a>

              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Ajouter un condidat 🦑
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Veuillez entrer toutes les informations concernant le condidat,
                y compris son nom, son prénom, son adresse, son numéro de
                téléphone, son poste occupé, ainsi que toute autre information
                pertinente pour son dossier
              </p>

              <form
                action={creatCondidat}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                {/* first_name  */}
                <div className="col-span-6 sm:col-span-3">
                  <Label className="block text-sm font-medium text-gray-700">
                    Nom
                  </Label>

                  <Input type="text" id="FirstName" name="first_name" />
                </div>
                {/* last_name  */}
                <div className="col-span-6 sm:col-span-3">
                  <Label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Prenom
                  </Label>

                  <Input
                    type="text"
                    id="LastName"
                    name="last_name"
                    // className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                {/* CIN  */}
                <div className="col-span-6 sm:col-span-3">
                  <Label className="block text-sm font-medium text-gray-700">
                    CIN
                  </Label>

                  <Input type="text" id="CIN" name="CIN" />
                </div>
                {/* PHONE  */}
                <div className="col-span-6 sm:col-span-3">
                  <Label className="block text-sm font-medium text-gray-700">
                    telephone
                  </Label>

                  <Input type="text" id="LastName" name="phone" />
                </div>
                {/* date_naissance */}
                <div className="col-span-6">
                  <Label className="block text-sm font-medium text-gray-700">
                    {" "}
                    date de naissance{" "}
                  </Label>

                  <Input type="date" id="date" name="date_naissance" />
                </div>
                {/* poste */}
                <div className="col-span-6">
                  <Label className="block text-sm font-medium text-gray-700">
                    {" "}
                    Poste occupé{" "}
                  </Label>

                  <Input type="text" id="Poste_occupé" name="poste" />
                </div>
                {/* commentaire  */}
                <div className="col-span-6 ">
                  <Label
                    htmlFor="motif"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Remarques sur la façon de passer le test
                  </Label>

                  <Textarea rows={4} id="motif" name="motif" />
                </div>
                {/* Résultat du test */}
                <div className="col-span-6 sm:col-span-3">
                  <Label htmlFor="success_accept" className="flex gap-4">
                    <Input
                      type="radio"
                      id="success_accept_reussi"
                      name="success_accept"
                      value="reussi"
                      className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />
                    <span className="text-sm text-gray-700">
                      Ce candidat a réussi le test
                    </span>
                  </Label>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <Label className="flex gap-4">
                    <Input
                      type="radio"
                      id="success_accept_non_reussi"
                      name="success_accept"
                      value="non_reussi"
                      className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />
                    <span className="text-sm text-gray-700">
                      Ce candidat n'a pas réussi le test
                    </span>
                  </Label>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Ajouter
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};
export default AddCondidate;

// "use client";
// import { CreateCondidate, GetCondidates } from "@/_services/GetCondidats";
// import { Condidate, Errors, Field, Session } from "@/interfaces/Interfaces";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, { useEffect, useRef, useState } from "react";
// import AlertSucces from "./alertSucces";
// interface Props {
//   session: Session;
// }
// const AddCondidate = ({ session }: Props) => {
//   const champs: Field[] = [
//     { nom: "nom", type: "text", label: "Nom", value: "" },
//     { nom: "prenom", type: "text", label: "Prénom", value: "" },
//     { nom: "cin", type: "text", label: "CIN", value: "" },
//     { nom: "email", type: "email", label: "Email", value: "" },
//     { nom: "telephone", type: "text", label: "Téléphone", value: "" },
//     {
//       nom: "date-naissance",
//       type: "date",
//       label: "Date de naissance",
//       value: "",
//     },
//     { nom: "poste", type: "text", label: "Poste appliqué", value: "" },
//     { nom: "motif", type: "text", label: "Motif d'application", value: "" },
//   ];

//   const [errors, setErrors] = useState<Errors>({});
//   const [isDesplyEroors, setIsDesplyEroors] = useState(false);
//   const [showSuccessAlert, setShowSuccessAlert] = useState(false);
//   const [showDnagerAlert, setShowDangerAlert] = useState(false);
//   const [isloading, setLoading] = useState(false);

//   const FerstNameRef = useRef<HTMLInputElement>(null);
//   const lastNameRef = useRef<HTMLInputElement>(null);
//   const cinRef = useRef<HTMLInputElement>(null);
//   const emailRef = useRef<HTMLInputElement>(null);
//   const dateNaissanceRef = useRef<HTMLInputElement>(null);
//   const phoneNumberRef = useRef<HTMLInputElement>(null);
//   const posteRef = useRef<HTMLInputElement>(null);
//   const motifRef = useRef<HTMLInputElement>(null);
//   const isSucceededRef = useRef<HTMLInputElement>(null);
//   const router = useRouter();
//   useEffect(() => {
//     FerstNameRef.current?.focus();
//     getData();
//   }, []);

//   const getData = () => {
//     setErrors({});
//     const FerstName = FerstNameRef.current?.value || "";
//     const lastName = lastNameRef.current?.value || "";
//     const cin = cinRef.current?.value || "";
//     const email = emailRef.current?.value || "";
//     const dateNaissance = dateNaissanceRef.current?.value || "";
//     const phoneNumber = phoneNumberRef.current?.value || "";
//     const poste = posteRef.current?.value || "";
//     const motif = motifRef.current?.value || "";

//     if (FerstName.trim() === "") {
//       setErrors((prevStat) => {
//         return { ...prevStat, nom: "Le champ nom est requis" };
//       });
//     }
//     if (lastName.trim() === "") {
//       setErrors((prevStat) => {
//         return { ...prevStat, prenom: "Le champ prénom est requis" };
//       });
//     }
//     if (cin.trim() === "") {
//       setErrors((prevStat) => {
//         return { ...prevStat, cin: "Le champ CIN est requis" };
//       });
//     }
//     if (email.trim() === "") {
//       setErrors((prevStat) => {
//         return { ...prevStat, email: "Le champ email est requis" };
//       });
//     }
//     if (phoneNumber.trim() === "") {
//       setErrors((prevStat) => {
//         return { ...prevStat, telephone: "Le champ téléphone est requis" };
//       });
//     }
//     if (dateNaissance.trim() === "") {
//       setErrors((prevStat) => {
//         return {
//           ...prevStat,
//           "date-naissance": "Le champ date de naissance est requis",
//         };
//       });
//     }
//     if (poste.trim() === "") {
//       setErrors((prevStat) => {
//         return {
//           ...prevStat,
//           poste: "Le champ poste appliqué est requis",
//         };
//       });
//     }
//     if (motif.trim() === "") {
//       setErrors((prevStat) => {
//         return {
//           ...prevStat,
//           motif: "Le champ motif d'application est requis",
//         };
//       });
//     }
//   };

//   const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     setLoading(true);
//     e.preventDefault();
//     setIsDesplyEroors(true);
//     getData();
//     if (Object.keys(errors).length === 0) {
//       creatUser();
//       resetForm();
//       setTimeout(() => setShowSuccessAlert(false), 3000); // Cache l'alerte après 3 secondes

//       router.push("/condidats/list");
//     } else {
//       setShowDangerAlert(true);
//       setTimeout(() => setShowDangerAlert(false), 3000); // Cache l'alerte après
//       setLoading(false);
//     }
//   };

//   const creatUser = async () => {
//     const newCondidate: Condidate | any = {
//       CIN: cinRef.current?.value ?? "",
//       firstName: FerstNameRef.current?.value ?? "",
//       lastName: lastNameRef.current?.value ?? "",
//       email: emailRef.current?.value ?? "",
//       phoneNumber: phoneNumberRef.current?.value ?? "",
//       dateNaissance: new Date(dateNaissanceRef.current?.value ?? ""),
//       posteApplique: posteRef.current?.value ?? "",
//       dateApplication: new Date(),
//       motifApply: motifRef.current?.value ?? "",
//       isSucceeded: isSucceededRef.current?.checked ?? false,
//       creatDate: new Date(Date.now()),
//       updateDate: new Date(""),
//       creatUser: session.user.name,
//       deleteDate: new Date(""),
//       UserApdate: "",
//       UserDelete: "",
//       isArchived: false,
//     };
//     console.log(newCondidate);
//     await CreateCondidate(newCondidate);
//     setLoading(false);
//     setShowSuccessAlert(true);
//   };

//   const resetForm = () => {
//     if (FerstNameRef.current) FerstNameRef.current.value = "";
//     if (lastNameRef.current) lastNameRef.current.value = "";
//     if (cinRef.current) cinRef.current.value = "";
//     if (emailRef.current) emailRef.current.value = "";
//     if (dateNaissanceRef.current) dateNaissanceRef.current.value = "";
//     if (phoneNumberRef.current) phoneNumberRef.current.value = "";
//     if (posteRef.current) posteRef.current.value = "";
//     if (motifRef.current) motifRef.current.value = "";
//     if (isSucceededRef.current) isSucceededRef.current.checked = false;
//   };

//   const getError = (feildName: string) => {
//     return errors[feildName];
//   };

//   const hasError = (feildName: string) => {
//     return getError(feildName) !== undefined;
//   };

//   return (
//     <div className="mx-auto max-w-screen-xl px-4 mt-5 sm:px-6 lg:px-20 ">
//       <div className="mx-24 px-48 ">
//         <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
//           Ajouter un candidat
//         </h1>

//         <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
//           Entrez toutes les informations du candidat
//         </p>

//         <form
//           onSubmit={handelSubmit}
//           className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
//         >
//           {champs.map((champsItem) => {
//             const ref = (() => {
//               switch (champsItem.nom) {
//                 case "nom":
//                   return FerstNameRef;
//                 case "prenom":
//                   return lastNameRef;
//                 case "cin":
//                   return cinRef;
//                 case "email":
//                   return emailRef;
//                 case "telephone":
//                   return phoneNumberRef;
//                 case "date-naissance":
//                   return dateNaissanceRef;
//                 case "poste":
//                   return posteRef;
//                 case "motif":
//                   return motifRef;
//                 default:
//                   return undefined;
//               }
//             })();

//             return (
//               <div key={champsItem.nom}>
//                 <label
//                   htmlFor={champsItem.nom}
//                   className="text-gray-600 font-bold p-2"
//                 >
//                   {champsItem.label}
//                 </label>

//                 <div className="relative">
//                   <input
//                     ref={ref}
//                     id={champsItem.nom}
//                     type={champsItem.type}
//                     className={`w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm ${
//                       hasError(champsItem.nom) ? "border-red-500" : ""
//                     }`}
//                     placeholder={`Entrez ${champsItem.label}`}
//                   />
//                   {isDesplyEroors && hasError(champsItem.nom) && (
//                     <div className="text-red-500">
//                       {getError(champsItem.nom)}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             );
//           })}

//           <div>
//             <label
//               htmlFor="isSucceeded"
//               className="text-gray-600 font-bold p-2"
//             >
//               Réussi le test ?
//             </label>
//             <div className="relative p-5  shadow-sm bg-gray-200">
//               <input
//                 ref={isSucceededRef}
//                 id="isSucceeded"
//                 type="checkbox"
//                 className="w-full rounded-lg shadow-sm "
//               />
//               <p className="w-full text-center ">oui?</p>
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={isloading}
//             className={`flex w-full items-center justify-center p-2 bg-green-600 text-white rounded ${
//               isloading ? "cursor-not-allowed" : "hover:bg-green-700"
//             }`}
//           >
//             {isloading ? (
//               <svg
//                 className="animate-spin h-5 w-5 text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 ></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8v8H4z"
//                 ></path>
//               </svg>
//             ) : (
//               "ajouter"
//             )}
//           </button>
//           {showSuccessAlert && (
//             <div>
//               <div className="mb-4 rounded-lg bg-green-500 p-4 text-white text-center">
//                 Le candidat a été ajouté avec succès !
//               </div>
//               <AlertSucces
//                 title="succès"
//                 description=" Le candidat a été ajouté avec succès !"
//               />
//             </div>
//           )}
//           {showDnagerAlert && (
//             <div>
//               <div className="mb-4 rounded-lg bg-red-500 p-4 text-white text-center">
//                 Un problème est survenu lors de la saisie des informations
//               </div>
//               <AlertSucces
//                 title="Échec"
//                 description="Le candidat n'a pas été ajouté !"
//               />
//             </div>
//           )}

//           <p className="text-center text-sm text-gray-500">
//             Un problème?
//             <Link className="underline" href="/">
//               Contacter nous
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddCondidate;
