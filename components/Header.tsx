import Link from "next/link";
import { Button } from "./ui/button";
import Container from "./ui/container";
import { useTheme } from "next-themes";
import { Moon, Menu, Sun } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const routes = [
    {
      href: "/",
      label: "MuayThai",
    },
    {
      href: "/",
      label: "BJJ",
    },
    {
      href: "/",
      label: "MMA",
    },
    {
      href: "/",
      label: "Merge",
    },
  ];

  return (
    <header className="sm:flex sm:justify-between py-3 px-4">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link
                      href={route.href}
                      key={i}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href={"/"}>
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 px-4">
                NEWPORTMMA
              </h1>
            </Link>
          </div>
          <nav className="mx-6 flex items-center space-x-4 hidden md:block">
            {routes.map((route, i) => (
              <Button asChild variant="ghost">
                <Link
                  key={i}
                  href={route.href}
                  className="text-sm font-medium transition-color"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            className="mr-6"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
            <Moon className="scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
