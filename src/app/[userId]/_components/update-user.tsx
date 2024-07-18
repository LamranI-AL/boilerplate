import { UpdateUser } from "@/_services/GetCurrentUser";
import { User } from "@/_services/Interfaces";
import React from "react";
interface Props {
  currentUser: User;
  user: User;
}
async function UpdateUserForm({ user, currentUser }: Props) {
  const getDataForm = async (formData: FormData) => {
    "use server";
    const nom = formData.get("first_name") as string;
    const prenom = formData.get("last_name") as string;
    const email = formData.get("email") as string;
    const ancienPassword = formData.get("password_ancienn") as string;
    const newPassword = formData.get("password_new") as string;
    const fullName =
      prenom.charAt(0).toUpperCase() +
      prenom.slice(1) +
      " " +
      nom.toUpperCase();
    // console.log(nom, prenom, email, ancienPassword, newPassword);
    if (ancienPassword !== user.password) {
      console.log("ancien mot de passe incorrect pas autorite de modifiée");
      //   throw new Error("ancien mot de passe incorrect ");
    } else {
      const newUpdatedUser: User = {
        ...user,
        name: fullName,
        email: email,
        password: newPassword,
      };
      await UpdateUser(user._id, newUpdatedUser);
      console.log("user updated");
    }
    //
    // revalidatePath("/"); revalidate
    // console.log(newUpdatedUser);
  };
  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Bonjour monsieur {currentUser.name}
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                changer les information de monsieur {user.name}
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Bonjour monsieur {currentUser.name}
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  changer les information de monsieur {user.name}
                </p>
              </div>

              <form
                action={getDataForm}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nom
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full rounded-md p-3 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Prenom
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    className="mt-1 w-full rounded-md p-3 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Email{" "}
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md p-3  border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Ancienne password{" "}
                  </label>

                  <input
                    type="password"
                    id="password_ancienn"
                    name="password_ancienn"
                    className="mt-1 w-full rounded-md p-3 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  {}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nouveau password
                  </label>

                  <input
                    type="password"
                    id="password_new"
                    name="password_new"
                    className="mt-1 w-full rounded-md p-3 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      className="size-5 rounded-md p-3 border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-gray-700">
                      I accept the terms of service and privacy policy
                    </span>
                  </label>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className="w-full inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    mettre a jour
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

export default UpdateUserForm;
