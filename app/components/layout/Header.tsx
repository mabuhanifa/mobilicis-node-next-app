import { Menu } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

interface HeaderProps {
  onGetQuoteClick: () => void;
}

const Header = ({ onGetQuoteClick }: HeaderProps) => {
  const navLinks = [
    { id: "services", title: "Services" },
    { id: "pricing", title: "Pricing" },
    { id: "about", title: "About" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex-1 flex justify-start">
          <div className="flex items-center space-x-2">
            <img src="/icon.svg" alt="AppZealand Logo" className="h-8 w-8 " />
            <span className="hidden font-bold sm:inline-block">AppZealand</span>
          </div>
        </div>

        <nav className="hidden md:flex justify-center">
          <div className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="transition-colors hover:font-bold text-foreground"
              >
                {link.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex-1 flex justify-end items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <Button onClick={onGetQuoteClick}>Get a Quote</Button>
            <ThemeToggle />
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="flex items-center space-x-2">
                    <img
                      src="/icon.svg"
                      alt="AppZealand Logo"
                      className="h-8 w-8 "
                    />
                    <span className="font-bold">AppZealand</span>
                  </div>
                </div>
                <nav className="flex flex-col gap-4 text-lg">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                      {link.title}
                    </a>
                  ))}
                </nav>
                <div className="mt-6 flex flex-col gap-2">
                  <Button onClick={onGetQuoteClick} className="w-full">
                    Get a Quote
                  </Button>
                  <div className="flex justify-center">
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
