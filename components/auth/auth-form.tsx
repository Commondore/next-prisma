import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

interface AuthFormProps {
  type: "login" | "register";
}

export const AuthForm = ({ type }: AuthFormProps) => {
  const isLogin = type === "login";

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">{isLogin ? "Вход" : "Регистрация"}</CardTitle>
        <CardDescription>
          {isLogin ? "Введите свои данные для входа" : "Создайте новый аккаунт"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="name@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Пароль</Label>
          <Input id="password" type="password" />
        </div>
        {!isLogin && (
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
            <Input id="confirmPassword" type="password" />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button className="w-full">{isLogin ? "Войти" : "Зарегистрироваться"}</Button>
        <div className="text-sm text-center text-muted-foreground">
          {isLogin ? (
            <>
              Нет аккаунта?{" "}
              <Link href="/register" className="text-primary hover:underline">
                Зарегистрироваться
              </Link>
            </>
          ) : (
            <>
              Уже есть аккаунт?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Войти
              </Link>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
