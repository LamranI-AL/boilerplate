export interface Employer {
  _id: string;
  CIN: string;
  FerstName: string;
  lastName: string;
  phoneNumber: string;
  dateNaissance: Date;
  email: string;
  posteName: string;
  creatUser: string;
  isRejected: boolean;
  UserUpdate: string;
  UserDelete: string;
  deleteDate: Date;
  isArchive: boolean;
  raison: string;
  createdAt: Date;
  updateAt: Date;
}
export interface Condidate {
  _id: string;
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
  creatUser: string;
  creatDate: Date;
  UserApdate: string;
  updateDate: Date;
  UserDelete: string;
  deleteDate: Date;
}
export interface Poste {
  _id: number;
  name: string;
  EmployerId: string;
  EmployerCIN: string;
  dateDebut: Date;
  dateFin: Date;
  motifDebut: string;
}
export interface Session {
  user: {
    name: string;
    email: string;
    password: string;
    role: string;
  };
  expires: string;
}
export interface User {
  _id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  dateChangeRole: Date;
}

export interface Field {
  nom: string;
  type: string;
  label: string;
  value: string;
}
export interface Counter {
  _id: boolean;
  count: string;
}

export interface Errors {
  [key: string]: string;
}
