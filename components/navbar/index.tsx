import { ModeToggle } from "@/components/mode-toggle";
import { Logo } from "@/components/logo";
import { navbarItems } from "./data";
import { NavLink } from "@/components/ui/nav-link";
import { AuthButtons } from "@/components/auth-buttons";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center mx-auto justify-between">
        <Logo />
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {navbarItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <AuthButtons />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
