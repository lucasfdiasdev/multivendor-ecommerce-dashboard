import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string({ message: "Email obrigatório." })
    .email({ message: "Email inválido." })
    .toLowerCase(),
  password: z
    .string({ message: "Senha obrigatório." })
    .regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&-+=()!? "]).{8,128}$/, {
      message:
        "Sua senha deve ter 8 caracteres, 1 letra maiúscula, 1 letra minúscula e 1 caractere especial",
    }),
});

export const registerSchema = z.object({
  confirmCheck: z.boolean().refine((value) => value === true, {
    message: "Você deve concordar com os termos e condições.",
  }),
  name: z
    .string({ message: "Nome obrigatório." })
    .min(3, { message: "Nome deve conter 3 no mínimo caracteres." })
    .regex(/^[a-zA-Z\s]+$/),
  email: z
    .string({ message: "Email obrigatório." })
    .email({ message: "Email inválido." })
    .toLowerCase(),
  password: z
    .string({ message: "Senha obrigatório." })
    .regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&-+=()!? "]).{8,128}$/, {
      message:
        "Sua senha deve ter 8 caracteres, 1 letra maiúscula, 1 letra minúscula e 1 caractere especial",
    }),
});

export const categorySchema = z.object({
  categoryName: z
    .string({ message: "Nome obrigatório." })
    .min(3, { message: "Nome deve conter 3 no mínimo caracteres." })
    .regex(/^[a-zA-Z\s]+$/),
  categoryImage: z.string(),
});
