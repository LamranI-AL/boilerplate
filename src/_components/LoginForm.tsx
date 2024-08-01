"use client";
import { DoLoginCredentialsDataONE } from "@/actions/DoLoginCredentialsData";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AlertDanger from "./alert-danger";
import AlertSucces from "./alertSucces";
import ButtonLoader from "./ButtonLoader";
export function SignIn() {
  const [error, setError] = useState<string | null>(null);
  const [isSucces, setIsSucces] = useState<boolean | null>(false);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault(); // Empêcher le rechargement de la page
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    try {
      await DoLoginCredentialsDataONE(data as {})
        .then(() => console.log("oookkk"))
        .catch((err) => {
          console.log(err);
        });
      setError(null);
      setIsLoading(false);
      setIsSucces(true);
      router.push("/");
    } catch (err: unknown) {
      console.log(err);
      setError("Erreur de connexion");
      setIsSucces(false);
      setIsLoading(false);
    }
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            className="py-7 px-3"
            type="text"
            name="email"
            placeholder="user name"
          />
          <input
            name="password"
            className="py-7 px-3"
            type="password"
            placeholder="Password"
          />
          <ButtonLoader isloading={isloading} title="login" />

          {error && (
            <div>
              <div className="bg-red-500 mb-3 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
              <AlertDanger
                title="Something went wrong "
                description="user ou bien mot de passe incorrect"
              />
            </div>
          )}
          {isSucces && (
            <div>
              <AlertSucces
                title="Bienvenue"
                description="Votre login correct pour macobate gestion admin"
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

// import { FormEvent, useState } from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { DoLoginCredentialsData } from "@/actions/DoLoginCredentialsData";

// export default function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const router = useRouter();
//   console.log(email, password);

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const res = await signIn("credentials", {
//   //       email,
//   //       password,
//   //       redirect: false,
//   //     });

//   //     if (res.error) {
//   //       setError("Invalid Credentials");
//   //       return;
//   //     }

//   //     router.replace("dashboard");
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };
//   const handleSubmit = async (e: FormEvent) => {
//     console.log(email, password);
//     e.preventDefault();
//     try {
//       // const formData = new FormData(e.currentTarget);
//       const res = await signIn("credentials", {
//         email,
//         password,
//         redirect: false,
//       });
//       if (!res) {
//         setError("Invalid Credentials");
//         return;
//       }

//       router.replace("dashboard");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="grid place-items-center h-screen">
//       <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
//         <h1 className="text-xl font-bold my-4">Login</h1>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             type="text"
//             placeholder="Email"
//             name="email"
//           />
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             placeholder="Password"
//             name="password"
//           />
//           <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
//             Login
//           </button>
//           {error && (
//             <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
//               {error}
//             </div>
//           )}

//           <Link className="text-sm mt-3 text-right" href={"/auth/register"}>
//             Don't have an account? <span className="underline">Register</span>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState } from "react";
// import { Session } from "next-auth";
// import { signIn, signOut } from "next-auth/react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// interface Props {
//   session: Session | null;
// }
// function LodinForm({ session }: Props) {
//   const logo = "/mylogo.png";
//   const [error, setError] = useState("");
//   // const { setSession } = useSessionContext();
//   // setSession(session);
//   const router = useRouter();
//   //  verify if the email is valid
//   const isValidEmail = (email: string) => {
//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//     return emailRegex.test(email);
//   };

//   const login = async (e: any) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const email = formData.get("email") as string;
//     const password = formData.get("password") as string;

//     if (!isValidEmail(email)) {
//       setError("Email is invalid");
//       return;
//     }

//     if (!password || password.length < 8) {
//       setError("Password is invalid");
//       return;
//     }
//     try {
//       const res = await signIn("credentials", {
//         email,
//         password,
//         redirectTo: "/dashboard",
//       });
//       if (res?.error) {
//         setError("invalid password or username");
//         if (res?.url) router.replace("/");
//       } else {
//         setError("");
//       }
//     } catch (error: any) {
//       const errorMessage = error.message || "An error occurred";
//       setError(errorMessage);
//     }
//   };
//   const logout = async () => {
//     await signOut();
//   };
//   // const githubLogin = async () => {
//   //   await signIn("github", { redirectTo: "/movies" });
//   // };
//   // const googleLogin = async () => {
//   //   await signIn("google", { redirectTo: "/movies" });
//   // };

//   if (!session) {
//     return (
//       <div className=" bg-black flex h-screen flex-row w-screen justify-center items-center  ">
//         <form
//           onSubmit={login}
//           className="flex flex-col mt-24 backdrop-blur-sm box-border px-1 bg-slate-800/70 border border-slate-700 border-solid   gap-12 items-center shadow-sm rounded-lg  mx-4 pb-3 "
//         >
//           <p className="text-red-600">{error && error}</p>
//           <input
//             type="email"
//             placeholder="Email"
//             name="email"
//             className="  text-slate-200 h-10 bg-slate-700 border-slate-600 border border-solid0 rounded-lg shadow-md items-center pl-4 outline-none mx-3"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             className="  text-slate-200 bg-slate-700 h-10 rounded-lg shadow-md border-slate-600 border border-soliditems-center pl-4 outline-none mx-3"
//           />
//           <div className="flex flex-row gap-2">
//             <button
//               className="rounded-lg shadow-md border-slate-600 border border-solid h-10 w-24  hover:bg-black hover:scale-105 transition ease-in duration-300  text-slate-200"
//               type="submit"
//             >
//               Login
//             </button>
//             {/* <button
//               className=" border-slate-600 border border-solid h-10 w-24 rounded-lg shadow-md hover:bg-black hover:scale-105 transition ease-in duration-300  text-slate-200"
//               type="submit"
//             >
//               <Link href="/login">Register</Link>
//             </button> */}
//           </div>
//           {/* <div className="flex flex-row gap-2">
//             <button
//               className=" border-slate-600 border border-solid h-10 w-24 rounded-lg shadow-md hover:bg-black hover:scale-105 transition ease-in duration-300  text-slate-200 flex flex-row items-center gap-1 pl-1"
//               onClick={githubLogin}
//               name="action"
//               type="button"
//               value="github"
//             >
//               GitHub
//             </button>
//             <button
//               className=" border-slate-600 border border-solid h-10 w-24 rounded-lg shadow-md hover:bg-black hover:scale-105 transition ease-in duration-300  text-slate-200 flex flex-row items-center gap-1 pl-1"
//               onClick={googleLogin}
//               name="action"
//               type="button"
//               value="google"
//             >
//               Google
//             </button>
//           </div> */}
//         </form>
//       </div>
//     );
//   } else
//     return (
//       <div className="bg-black items-center justify-center  flex font-sans h-screen w-screen ">
//         <div className="flex flex-col mt-24 backdrop-blur-sm box-border px-1 bg-slate-800/70 border border-slate-700 border-solid  justify-center items-center mx-10 py-3 md:mx-24 lg:mx-56 xl:mx-64 gap-5 rounded-lg">
//           <Link href="/">
//             <Image
//               src={logo}
//               height={300}
//               width={400}
//               alt="logo"
//               className=" object-contain  hover:scale-105 transition ease-in duration-500 cursor-pointer h-[290px] w-[390px] rounded-lg "
//             />
//           </Link>
//           <h1 className=" break-words text-ellipsis text-slate-300 whitespace-normal ml-2">
//             Are you sure you want to sign out of{" "}
//             <span className=" text-blue-900 cursor-pointer">
//               {" "}
//               <Link href="/">Hafid Platform</Link>{" "}
//             </span>{" "}
//             ? We hope you enjoyed your time watching movies with us. If you sign
//             out, you will need to log back in to continue accessing your
//             personalized recommendations and watchlist. See you again soon!
//           </h1>

//           <div className="flex flex-row gap-2">
//             <button
//               onClick={logout}
//               className="  border-slate-600 border border-solid h-10 w-24 rounded-lg shadow-md hover:bg-black hover:scale-105 transition ease-in duration-300  text-slate-200"
//               type="submit"
//             >
//               Sign out
//             </button>

//             <button
//               className="  border-slate-600 border border-solid h-10 w-24 rounded-lg shadow-md hover:bg-black hover:scale-105 transition ease-in duration-300  text-slate-200"
//               type="submit"
//             >
//               <Link href="/">Home</Link>
//             </button>
//           </div>
//         </div>
//       </div>
//     );
// }

// export default LodinForm;
