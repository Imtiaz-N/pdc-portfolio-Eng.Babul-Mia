import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";
import { useData } from "@/hooks/use-data";

export function Footer() {
  const { data: site } = useData<any>("site.json");
  const logoSrc = `${import.meta.env.BASE_URL}logo.jpg`;

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t border-secondary-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="flex flex-col space-y-4">
            <div className="bg-white p-2 rounded w-fit inline-block mb-2">
              <img src={logoSrc} alt="PDC Engineers" className="h-12 w-auto" />
            </div>
            <h3 className="font-serif text-xl font-bold">PDC Engineers & Associates</h3>
            <p className="text-sm text-secondary-foreground/70 max-w-sm">
              {site?.company?.tagline || "Planning, Design & Construction"}
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="font-serif font-semibold text-lg text-primary">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-secondary-foreground/80">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              <Link href="/team" className="hover:text-primary transition-colors">Our Team</Link>
              <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
              <Link href="/clients" className="hover:text-primary transition-colors">Clients</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="font-serif font-semibold text-lg text-primary">Contact Info</h4>
            <ul className="text-sm text-secondary-foreground/80 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>{site?.company?.address || "House #31, Road No. 7, Block F, Banasree, Rampura, Dhaka-1219"}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>{(site?.company?.phones || ["01732671618", "01943199969"]).join(", ")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>{site?.company?.email || "pdc.engineers90@gmail.com"}</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-secondary-border/50 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-secondary-foreground/60">
          <p>© 2024 PDC Engineers & Associates. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <span className="hover:text-primary cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
