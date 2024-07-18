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
