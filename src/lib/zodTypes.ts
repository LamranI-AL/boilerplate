import { z } from "zod";

export const sanctionSchema = z.object({
  _id: z.string().optional(),
  EmployerId: z.string().optional(),
  sanction: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de sanction.",
    })
    .max(50, {
      message: "La sanction doit contenir moins de 50 caractères.",
    }),
  faute: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de faute.",
    })
    .max(50, {
      message: "La faute doit contenir moins de 50 caractères.",
    }),
  date: z
    .date({
      message: "La date doit être une date valide.",
    })
    .max(new Date(), {
      message: "La date doit être dans le passé ou bien actuelle",
    }),
});
export const userSchema = z.object({
  _id: z.string().optional(),
  nom: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de nom.",
    })
    .max(50, {
      message: "La nom doit contenir moins de 50 caractères.",
    }),
  prenom: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de prenom.",
    })
    .max(50, {
      message: "La prenom doit contenir moins de 50 caractères.",
    }),
  email: z
    .string()
    .trim()
    .email({ message: "Veuillez remplir le champ de email." })
    .max(30, { message: "La email doit contenir moins de 50 caractères " }),
  lastPassword: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de ancienn password.",
    })
    .max(50, {
      message: "Le password doit contenir moins de 50 caractères.",
    }),
  newPassword: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de nouveaux password.",
    })
    .max(50, {
      message: "Le password  doit contenir moins de 50 caractères.",
    }),
});

export const ComentSchema = z.object({
  _id: z.string().optional(),
  commentContent: z
    .string()
    .min(5, {
      message: "Le commentaire doit contenir au moins 5 caractères.",
    })
    .max(100, {
      message: "Le commentaire doit contenir moins de 100 caractères.",
    }),
});
export const posteSchema = z.object({
  _id: z.string().optional(),
  name: z
    .string()
    .min(1, {
      message: "Le nom doit contenir au moins 1 caractère.",
    })
    .max(50, {
      message: "Le nom doit contenir moins de 50 caractères.",
    }),
  date: z.date(),
  motif: z
    .string()
    .min(1, {
      message: "Le nom doit contenir au moins 1 caractère.",
    })
    .max(50, {
      message: "Le nom doit contenir moins de 50 caractères.",
    }),
});
export const adminSchema = z.object({
  _id: z.string().optional(),
  name: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de fullname.",
    })
    .max(50, {
      message: "La prenom doit contenir moins de 50 caractères.",
    }),
  email: z
    .string()
    .trim()
    .email({ message: "Veuillez remplir le champ de email Acces." })
    .max(30, { message: "La email doit contenir moins de 50 caractères " }),
  password: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de password.",
    })
    .max(50, {
      message: "Le password doit contenir moins de 50 caractères.",
    }),
  passwordConfirm: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de confirme password.",
    })
    .max(50, {
      message: "Le password  doit contenir moins de 50 caractères.",
    }),
});
//ouvrier
export const ouvrierSchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de first_name.",
    })
    .max(50, {
      message: "Le first_name doit contenir moins de 50 caractères.",
    }),
  last_name: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de last_name.",
    })
    .max(50, {
      message: "Le last_name doit contenir moins de 50 caractères.",
    }),
  CIN: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de CIN.",
    })
    .max(50, {
      message: "Le CIN doit contenir moins de 50 caractères.",
    }),
  phone: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de phone.",
    })
    .max(50, {
      message: "Le phone doit contenir moins de 50 caractères.",
    }),
  date_naissance: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de date_naissance.",
    })
    .max(50, {
      message: "La date_naissance doit contenir moins de 50 caractères.",
    }),
  poste: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de poste.",
    })
    .max(50, {
      message: "Le poste doit contenir moins de 50 caractères.",
    }),
});
//condidtae
export const condidatSchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de first_name.",
    })
    .max(50, {
      message: "Le first_name doit contenir moins de 50 caractères.",
    }),
  last_name: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de last_name.",
    })
    .max(50, {
      message: "Le last_name doit contenir moins de 50 caractères.",
    }),
  CIN: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de CIN.",
    })
    .max(50, {
      message: "Le CIN doit contenir moins de 50 caractères.",
    }),
  phone: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de phone.",
    })
    .max(50, {
      message: "Le phone doit contenir moins de 50 caractères.",
    }),
  date_naissance: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de date_naissance.",
    })
    .max(50, {
      message: "La date_naissance doit contenir moins de 50 caractères.",
    }),
  poste: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de poste.",
    })
    .max(50, {
      message: "Le poste doit contenir moins de 50 caractères.",
    }),
  motif: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de motif.",
    })
    .max(50, {
      message: "Le motif doit contenir moins de 50 caractères.",
    }),
  success_accept: z
    .string()
    .trim()
    .min(1, {
      message: "Veuillez remplir le champ de reussi de test.",
    })
    .max(50, {
      message: "de reussi de test doit coche",
    }),
});
