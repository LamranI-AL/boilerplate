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
  rejectMotif: string;
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
  _id: string;
  name: string;
  EmployerId: string;
  EmployerCIN: string;
  dateDebute: Date;
  dateFin: Date;
  motifDebut: string;
}
export interface Session {
  user: User;
  expires: string;
}
export interface Sanction {
  _id: string;
  EmployerId: string;
  sanction: string;
  date: Date;
  faute: string;
}
export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  isSuperAdmin: boolean;
  dateChangeRole: Date;
  lastLoginDate: Date;
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
