import { LoginForm } from "@/components/auth/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="container max-w-md mx-auto py-10">
      <h1 className="text-2xl font-bold text-center mb-8">Вход</h1>
      <LoginForm />
      <p className="text-center mt-4">
        Нет аккаунта?{" "}
        <Link href="/register" className="text-primary hover:underline">
          Зарегистрироваться
        </Link>
      </p>
    </div>
  );
}
