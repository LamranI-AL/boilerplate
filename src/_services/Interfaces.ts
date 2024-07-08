export interface Employer {
  // _id: number;
  CIN: string;
  FerstName: string;
  lastName: string;
  role: string;
  phoneNumber: string;
  dateNaissance: Date;
  email: string;
  posteName: string;
  //all faild in haut is required
  isRejected: boolean;
  isArchive: boolean;
  raison: string;
  createdAt: Date;
  updateAt: Date;
  dateSuppression: Date;
  dateArchivage: Date;
  dateReactivation: Date;
}
export interface Condidate {
  firstName: string;
  lastName: string;
  CIN: string;
  email: string;
  phoneNumber: string;
  dateNaissance: Date;
  posteApplique: string;
  dateApplication: Date;
  motifApply: string;
  isSucceeded: boolean;
}
// CIN: { type: String, required: true, unique: true },
//   FerstName: { type: String, required: true },
//   lastName: { type: String, required: true },

//   phoneNumber: { type: String, required: true },
//   role: {
//     type: String,
//     required: true,
//     enum: ["admin", "superAdmin", "user"],
//     default: "user",
//   },
//   dateNaissance: { type: Date, required: true },
//   employerDepartment: { type: String },
//   isRejected: { type: Boolean, default: false },
//   raison: { type: String },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date },
//   dateSuppression: Date,
//   dateArchivage: Date,
//   dateReactivation: Date,
export interface Poste {
  _id: number;
  name: string;
  EmployerId: string;
  EmployerCIN: string;
  dateDebut: Date;
  dateFin: Date;
  motifDebut: string;
}

export interface Field {
  nom: string;
  type: string;
  label: string;
  value: string;
}

export interface Errors {
  [key: string]: string;
}
// {
//       "CIN":  "UC1122",
//       "FerstName": "othmane",
//       "lastName": "LAMRANI ALAOUI",
//       "role": "user",
//       "phoneNumber":  "066187356",
//       "dateNaissance":"11-11-2000",
//       "employerDepartment": "",
//       "isRejected": false,
//       "raison": ""
//     }
