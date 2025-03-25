import { RegisterForm } from "@/components/auth/register-form";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="container max-w-md mx-auto py-10">
      <h1 className="text-2xl font-bold text-center mb-8">Регистрация</h1>
      <RegisterForm />
      <p className="text-center mt-4">
        Уже есть аккаунт?{" "}
        <Link href="/login" className="text-primary hover:underline">
          Войти
        </Link>
      </p>
    </div>
  );
}
