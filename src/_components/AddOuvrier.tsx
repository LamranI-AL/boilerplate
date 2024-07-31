"use client";
import { creatUserAction } from "@/actions/creatUserAction";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ouvrierSchema } from "@/lib/zodTypes";
import { UserPlusIcon } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
const AddOuvrier = () => {
  const creatUser = async (formData: FormData) => {
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const CIN = formData.get("CIN");
    const phone = formData.get("phone");
    const date_naissance = formData.get("date_naissance") as string;
    const poste = formData.get("poste");
    const input = {
      first_name,
      last_name,
      CIN,
      phone,
      date_naissance,
      poste,
    };
    //validation
    const result = ouvrierSchema.safeParse(input);
    if (result.success) {
      const toastId = toast.loading("Waiting...");
      await creatUserAction(formData).then(() => {
        toast.dismiss(toastId);
        toast.success("Ouvrier ajouté avec succès");
      });
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
                Ajouter un ouvrier 🦑
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Veuillez entrer toutes les informations concernant l'ouvrier, y
                compris son nom, son prénom, son adresse, son numéro de
                téléphone, son poste occupé, ainsi que toute autre information
                pertinente pour son dossier
              </p>

              <form action={creatUser} className="mt-8 grid grid-cols-6 gap-6">
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
                <div className="col-span-6 ">
                  <Label className="block text-sm font-medium text-gray-700">
                    {" "}
                    Poste occupé{" "}
                  </Label>

                  <Input type="text" id="Poste_occupé" name="poste" />
                </div>
                {/* <div className="col-span-6 sm:col-span-3">
                  <Label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password Confirmation
                  </Label>

                  <Input
                    type="password"
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    // className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div> */}
                {/* <div className="col-span-6">
                  <Label htmlFor="MarketingAccept" className="flex gap-4">
                    <Input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-gray-700">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </Label>
                </div> */}
                {/* <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <a href="#" className="text-gray-700 underline">
                      {" "}
                      terms and conditions{" "}
                    </a>
                    and
                    <a href="#" className="text-gray-700 underline">
                      privacy policy
                    </a>
                    .
                  </p>
                </div> */}
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Ajouter
                  </button>

                  {/* <p className="mt-4 text-sm text-gray-400 sm:mt-0">
                    problem?
                    <a href="#" className="text-gray-600 underline">
                      contact-m
                    </a>
                  </p> */}
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default AddOuvrier;

// "use client";
// import { CreateEmployer, GetEmployers } from "@/_services/GetEmployers";
// // import { CreatePost } from "@/_services/GetPosts";
// import {
//   Employer,
//   Errors,
//   Field,
//   Poste,
//   Session,
// } from "@/interfaces/Interfaces";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, { useEffect, useRef, useState } from "react";
// interface Props {
//   session: Session;
// }
// const AddOuvrier = ({ session }: Props) => {
//   // const router = useRouter();
//   // console.log(session.user?.name);
//   const champs: Field[] = [
//     { nom: "nom", type: "text", label: "Nom", value: "" },
//     { nom: "prenom", type: "text", label: "Prénom", value: "" },
//     { nom: "cin", type: "text", label: "CIN", value: "" },
//     { nom: "telephone", type: "text", label: "Téléphone", value: "" },
//     {
//       nom: "date-naissance",
//       type: "date",
//       label: "Date de naissance",
//       value: "",
//     },
//     { nom: "poste", type: "text", label: "Poste occupé", value: "" },
//   ];

//   // const [errors, setErrors] = useState<Errors>({});
//   // const [isDesplyEroors, setIsDesplyEroors] = useState(false);
//   // const [showSuccessAlert, setShowSuccessAlert] = useState(false);

//   // const FerstNameRef = useRef<HTMLInputElement>(null);
//   // const lastNameRef = useRef<HTMLInputElement>(null);
//   // const cinRef = useRef<HTMLInputElement>(null);
//   // const dateNaissanceRef = useRef<HTMLInputElement>(null);
//   // const phoneNumberRef = useRef<HTMLInputElement>(null);
//   // const posteRef = useRef<HTMLInputElement>(null);

//   // useEffect(() => {
//   //   FerstNameRef.current?.focus();
//   // }, []);

//   // const getData = () => {
//   //   setErrors({});
//   //   const FerstName = FerstNameRef.current?.value || "";
//   //   const lastName = lastNameRef.current?.value || "";
//   //   const cin = cinRef.current?.value || "";
//   //   const dateNaissance = dateNaissanceRef.current?.value || "";
//   //   const phoneNumber = phoneNumberRef.current?.value || "";
//   //   const poste = posteRef.current?.value || "";

//   //   if (FerstName.trim() === "") {
//   //     setErrors((prevStat) => {
//   //       return { ...prevStat, nom: "Le champ nom est requis" };
//   //     });
//   //   }
//   //   if (lastName.trim() === "") {
//   //     setErrors((prevStat) => {
//   //       return { ...prevStat, prenom: "Le champ prénom est requis" };
//   //     });
//   //   }
//   //   if (cin.trim() === "") {
//   //     setErrors((prevStat) => {
//   //       return { ...prevStat, cin: "Le champ CIN est requis" };
//   //     });
//   //   }
//   //   if (phoneNumber.trim() === "") {
//   //     setErrors((prevStat) => {
//   //       return { ...prevStat, telephone: "Le champ téléphone est requis" };
//   //     });
//   //   }
//   //   if (dateNaissance.trim() === "") {
//   //     setErrors((prevStat) => {
//   //       return {
//   //         ...prevStat,
//   //         "date-naissance": "Le champ date de naissance est requis",
//   //       };
//   //     });
//   //   }
//   //   if (poste.trim() === "") {
//   //     setErrors((prevStat) => {
//   //       return {
//   //         ...prevStat,
//   //         poste: "Le champ poste occupé est requis",
//   //       };
//   //     });
//   //   }
//   // };

//   // const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault();
//   //   setIsDesplyEroors(true);
//   //   getData();
//   //   if (Object.keys(errors).length === 0) {
//   //     creatUser();
//   //     resetForm();
//   //     setShowSuccessAlert(true);
//   //     // router.push("/dashboard/list");
//   //     setTimeout(() => setShowSuccessAlert(false), 3000); // Cache l'alerte après 3 secondes
//   //   }
//   // };

//   const creatUser = async () => {
//     const newOuvrier: Employer | any = {
//       CIN: cinRef.current?.value ?? "",
//       FerstName: FerstNameRef.current?.value ?? "",
//       lastName: lastNameRef.current?.value ?? "",
//       phoneNumber: phoneNumberRef.current?.value ?? "",
//       dateNaissance: new Date(dateNaissanceRef.current?.value ?? ""),
//       email: "",
//       posteName: posteRef.current?.value ?? "",
//       isRejected: false,
//       isArchive: false,
//       raison: "",
//       createdAt: new Date(Date.now()),
//       updateAt: new Date(),
//       creatUser: session.user?.name ?? "",
//       deleteDate: new Date(""),
//       UserDelete: "",
//       UserUpdate: "",
//       isInBlackList: false,
//     };
//     await CreateEmployer(newOuvrier)
//       .then(() => {
//         console.log("creat employee is ok ");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     // console.log(newOuvrier);
//   };
//   // const resetForm = () => {
//   //   if (FerstNameRef.current) FerstNameRef.current.value = "";
//   //   if (lastNameRef.current) lastNameRef.current.value = "";
//   //   if (cinRef.current) cinRef.current.value = "";
//   //   if (dateNaissanceRef.current) dateNaissanceRef.current.value = "";
//   //   if (phoneNumberRef.current) phoneNumberRef.current.value = "";
//   //   if (posteRef.current) posteRef.current.value = "";
//   // };

//   // const getError = (feildName: string) => {
//   //   return errors[feildName];
//   // };

//   // const hasError = (feildName: string) => {
//   //   return getError(feildName) !== undefined;
//   // };

//   return (
//     <div className="mx-auto max-w-screen-xl px-4 mt-5 sm:px-6 lg:px-20 ">
//       <div className="mx-24 px-48 ">
//         <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
//           Ajouter un ouvrier
//         </h1>

//         <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
//           Entrez toutes les informations de l'ouvrier
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
//                 case "telephone":
//                   return phoneNumberRef;
//                 case "date-naissance":
//                   return dateNaissanceRef;
//                 case "poste":
//                   return posteRef;
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

//           <button
//             type="submit"
//             className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
//           >
//             Ajouter
//           </button>
//           {showSuccessAlert && (
//             <div className="mb-4 rounded-lg bg-green-500 p-4 text-white text-center">
//               L'ouvrier a été ajouté avec succès !
//             </div>
//           )}

//           <p className="text-center text-sm text-gray-500">
//             Un problème?
//             <Link className="underline" href="/">
//               Contacter m
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddOuvrier;
