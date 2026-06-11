import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Team", path: "/team" },
  { name: "Projects", path: "/projects" },
  { name: "Clients", path: "/clients" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
          <div className="bg-white p-1 rounded-md">
            <img src={logoSrc} alt="PDC Engineers & Associates" className="h-10 w-auto" />
          </div>
          <span className="font-serif font-bold text-xl hidden sm:inline-block tracking-tight text-foreground">
            PDC Engineers
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Button asChild size="sm" className="ml-2 font-semibold">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b bg-background animate-in slide-in-from-top-2">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => {
              const isActive = location === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={closeMenu}
                  className={`text-base font-medium ${
                    isActive ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
