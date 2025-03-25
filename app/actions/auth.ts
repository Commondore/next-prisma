"use server";

import prisma from "@/lib/prisma";
import {
  createToken,
  hashPassword,
  removeAuthCookie,
  setAuthCookie,
  verifyPassword,
} from "@/lib/auth";
import { loginSchema, registerSchema } from "@/lib/validations/auth";

export async function register(data: FormData) {
  const validatedFields = registerSchema.safeParse({
    name: data.get("name"),
    email: data.get("email"),
    password: data.get("password"),
  });

  if (!validatedFields.success) {
    return {
      error: "Ошибка валидации",
      fields: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return {
      error: "Пользователь с таким email уже существует",
    };
  }

  const hashedPassword = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const token = await createToken(user.id);
  await setAuthCookie(token);

  return { success: true };
}

export async function login(data: FormData) {
  const validatedFields = loginSchema.safeParse({
    email: data.get("email"),
    password: data.get("password"),
  });

  if (!validatedFields.success) {
    return {
      error: "Ошибка валидации",
      fields: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return {
      error: "Неверный email или пароль",
    };
  }

  const isValidPassword = await verifyPassword(password, user.password);

  if (!isValidPassword) {
    return {
      error: "Неверный email или пароль",
    };
  }

  const token = await createToken(user.id);
  await setAuthCookie(token);

  return { success: true };
}

export async function logout() {
  await removeAuthCookie();
  return { success: true };
}
