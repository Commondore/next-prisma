import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-serif font-bold text-primary">404</h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-medium">Упс! Страница не найдена</h2>
          <p className="text-muted-foreground">
            Похоже, что вы пытаетесь найти блюдо, которого нет в нашем меню
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
