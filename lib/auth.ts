"use server";

import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { cookies } from "next/headers";

export async function hashPassword(password: string) {
  return hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return compare(password, hashedPassword);
}

export async function createToken(userId: string) {
  return sign({ userId }, process.env.JWT_SECRET!, { expiresIn: "7d" });
}

export async function setAuthCookie(token: string) {
  (await cookies()).set("auth-token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60, // 7 дней
  });
}

export async function removeAuthCookie() {
  (await cookies()).delete("auth-token");
}
