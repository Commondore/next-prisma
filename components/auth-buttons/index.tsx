"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { logout } from "@/app/actions/auth";
import { useRouter } from "next/navigation";

interface AuthButtonsProps {
  isAuthenticated: boolean;
}

export const AuthButtons = ({ isAuthenticated }: AuthButtonsProps) => {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.refresh();
  };

  if (isAuthenticated) {
    return (
      <Button variant="ghost" size="sm" onClick={handleLogout}>
        Выйти
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Button variant="ghost" size="sm" asChild>
        <Link href="/login">Войти</Link>
      </Button>
      <Button size="sm" asChild>
        <Link href="/register">Регистрация</Link>
      </Button>
    </div>
  );
};
