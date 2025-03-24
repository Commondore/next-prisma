import Link from "next/link";
import { Button } from "@/components/ui/button";

export const AuthButtons = () => {
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
