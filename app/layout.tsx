import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Нормальный сайт",
  description: "Нормальный сайт",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
