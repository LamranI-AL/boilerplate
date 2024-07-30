import { create } from "zustand";
import { Employer } from "../interfaces/Interfaces";

type SearchStoreType = {
  currentSearch: string;
  setCurrentSearch: (value: string) => void;
};

export const useSearchStore = create<SearchStoreType>((set) => ({
  currentSearch: "",
  setCurrentSearch: (value: string) =>
    set((state) => ({ currentSearch: value })),
}));

// import { Employer } from "./Interfaces";
// import { GetEmployers } from "./GetEmployers";

// type EmployerStoreType = {
//   employers: Employer[];
//   getActiveEmployer: () => void;
//   getArchiveEmployer: () => void;
// };

// export const useEmployerStore = create<EmployerStoreType>((set, get) => ({
//   employers: [],
//   getActiveEmployer: async () => {
//     const res: Employer[] = await GetEmployers().then((res) => res.data);
//     set(() => ({
//       employers: res.filter(
//         (employer) =>
//           employer.isArchive === false && employer.isRejected === false
//       ),
//     }));
//   },
//   getArchiveEmployer: async () => {
//     const res: Employer[] = await GetEmployers().then((res) => res.data);
//     set(() => ({
//       employers: res.filter(
//         (employer) =>
//           employer.isArchive === true && employer.isRejected === false
//       ),
//     }));
//   },
// }));
