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
  { name: "Blog", path: "/blog" },
  { name: "Clients", path: "/clients" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-ink/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[50px] flex items-center justify-between">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3 shrink-0">
          <svg
            viewBox="0 0 64 64"
            className="h-10 w-10"
            role="img"
            aria-label="PDC Engineers logo"
          >
            {/* Rounded square frame */}
            <rect x="1" y="1" width="62" height="62" rx="14" fill="#121517" />

            {/* Ground line */}
            <rect x="12" y="47" width="40" height="2" rx="1" fill="#B08D3E" />

            {/* Left low-rise building */}
            <rect x="14" y="34" width="10" height="13" fill="#B08D3E" />
            <rect x="16.5" y="37" width="2" height="2" fill="#121517" />
            <rect x="21" y="37" width="2" height="2" fill="#121517" />
            <rect x="16.5" y="41" width="2" height="2" fill="#121517" />
            <rect x="21" y="41" width="2" height="2" fill="#121517" />

            {/* Center tall tower */}
            <rect x="27" y="16" width="12" height="31" fill="#F4EBD9" />
            <rect x="29.5" y="20" width="2.4" height="2.4" fill="#121517" />
            <rect x="34" y="20" width="2.4" height="2.4" fill="#121517" />
            <rect x="29.5" y="25" width="2.4" height="2.4" fill="#121517" />
            <rect x="34" y="25" width="2.4" height="2.4" fill="#121517" />
            <rect x="29.5" y="30" width="2.4" height="2.4" fill="#121517" />
            <rect x="34" y="30" width="2.4" height="2.4" fill="#121517" />
            <rect x="29.5" y="35" width="2.4" height="2.4" fill="#121517" />
            <rect x="34" y="35" width="2.4" height="2.4" fill="#121517" />
            {/* Tower spire */}
            <rect x="31.7" y="10" width="1.6" height="6" fill="#F4EBD9" />

            {/* Right mid-rise building */}
            <rect x="41" y="26" width="10" height="21" fill="#B08D3E" />
            <rect x="43.5" y="29.5" width="2" height="2" fill="#121517" />
            <rect x="48" y="29.5" width="2" height="2" fill="#121517" />
            <rect x="43.5" y="33.5" width="2" height="2" fill="#121517" />
            <rect x="48" y="33.5" width="2" height="2" fill="#121517" />
            <rect x="43.5" y="37.5" width="2" height="2" fill="#121517" />
            <rect x="48" y="37.5" width="2" height="2" fill="#121517" />
          </svg>

          <div className="leading-tight">
            <div className="font-serif text-lg font-bold tracking-tight text-ink">
              PDC
            </div>
            <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gold -mt-0.5">
              Engineers
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  isActive ? "text-gold" : "text-ink/70"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Button
            asChild
            size="sm"
            className="ml-2 bg-gold text-[11px] font-semibold uppercase tracking-widest text-white hover:bg-gold/90 px-5"
          >
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-ink/10 bg-background animate-in slide-in-from-top-2">
          <div className="max-w-7xl mx-auto flex flex-col px-6 py-5 space-y-4">
            {navLinks.map((link) => {
              const isActive = location === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={closeMenu}
                  className={`text-base font-medium ${
                    isActive ? "text-gold" : "text-ink"
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