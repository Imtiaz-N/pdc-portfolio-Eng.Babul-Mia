import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Building2, Pencil, HardHat, Zap, Flame, Mountain, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useData } from "@/hooks/use-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap: Record<string, any> = {
  Building2,
  Pencil,
  HardHat,
  Zap,
  Flame,
  Mountain,
};

const BUILDING_IMAGES = [
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=85",
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=85",
];

const WHY_US_IMAGE =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85";

const SERVICES_BG =
  "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1920&q=80";

export default function HomePage() {
  const { data: site, loading: siteLoading } = useData<any>("site.json");
  const { data: servicesData, loading: servicesLoading } = useData<any>("services.json");

  if (siteLoading || servicesLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  const { company, vision } = site || {};
  const departments = servicesData?.departments || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section
        className="relative text-white overflow-hidden min-h-[92vh] flex items-center"
        data-testid="section-hero"
      >
        {/* Full-bleed building photo */}
        <div className="absolute inset-0 z-0">
          <img
            src={BUILDING_IMAGES[0]}
            alt="Modern high-rise building"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Dark gradient overlay — stronger at left where text sits */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/30" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-secondary to-transparent" />
        </div>

        {/* Gold diagonal accent line */}
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent z-10 opacity-60" />

        <div className="container relative z-10 mx-auto px-4 py-24 lg:py-36">
          <div className="max-w-3xl space-y-7">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-sm font-medium text-primary tracking-wide"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />
              Established {company?.established || 2022} · Dhaka, Bangladesh
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
            >
              {company?.name}
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-primary font-semibold tracking-wide uppercase"
            >
              {company?.tagline}
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/75 max-w-2xl font-light leading-relaxed"
            >
              We provide complete{" "}
              <span className="text-white font-medium">structural and architectural engineering solutions</span> —
              from foundation design to full building construction. Our expert team
              delivers residential, commercial, and industrial projects with precision,
              safety, and internationally recognized standards.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button
                asChild
                size="lg"
                className="h-13 px-8 text-base font-semibold shadow-lg shadow-primary/30"
                data-testid="btn-work-with-us"
              >
                <Link href="/contact">
                  Work With Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-13 px-8 text-base bg-transparent border-white/25 text-white hover:bg-white/10 hover:border-white/50"
                data-testid="btn-view-projects"
              >
                <Link href="/projects">View Our Projects</Link>
              </Button>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-white/10"
            >
              {[
                { value: "27+", label: "Accomplished Projects" },
                { value: "6", label: "Engineering Divisions" },
                { value: "2022", label: "Year Founded" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{value}</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Service Types Banner ─────────────────────────────────── */}
      <section className="bg-primary py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-semibold text-primary-foreground/90 uppercase tracking-widest">
            {[
              "Structural Engineering",
              "Architectural Design",
              "Civil Construction",
              "MEP Engineering",
              "Fire Safety",
              "Geotechnical Investigation",
            ].map((s, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="opacity-40">·</span>}
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ────────────────────────────────────────── */}
      <section
        className="relative py-24 bg-background overflow-hidden"
        data-testid="section-services"
      >
        {/* Subtle background tint */}
        <div
          className="absolute inset-0 opacity-[0.03] bg-cover bg-center"
          style={{ backgroundImage: `url(${SERVICES_BG})` }}
        />
        <div className="container relative mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-3">
              What We Do
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-5 text-foreground">
              Engineering Solutions for Every Structure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to completion — we provide structural, architectural, and construction
              services that meet international codes and your specific project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept: any, i: number) => {
              const Icon = iconMap[dept.icon] || Building2;
              return (
                <motion.div
                  key={dept.id}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card
                    className="h-full border-border/60 hover:border-primary/60 transition-all duration-300 bg-card hover:shadow-xl hover:-translate-y-1"
                    data-testid={`card-service-${dept.id}`}
                  >
                    <CardHeader>
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-serif text-xl">{dept.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base line-clamp-3 mb-6">
                        {dept.description}
                      </CardDescription>
                      <Link
                        href="/services"
                        className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all hover:underline"
                        data-testid={`link-service-${dept.id}`}
                      >
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────────── */}
      <section
        className="py-24 bg-secondary/5 border-y border-border"
        data-testid="section-why-us"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-14 items-center">
            {/* Text */}
            <div className="lg:w-1/2 space-y-6">
              <p className="text-primary uppercase tracking-widest text-sm font-semibold">
                Why PDC
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Built on Precision.<br />Trusted by Clients.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine ICC-certified structural expertise, modern design software, and rigorous
                safety management to deliver buildings you can rely on — on time, within budget, and
                to international standards.
              </p>

              <ul className="space-y-4 pt-2">
                {vision?.whyUs?.slice(0, 6).map((reason: string, i: number) => (
                  <motion.li
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                    data-testid={`item-why-us-${i}`}
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground text-[15px]">{reason}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-4">
                <Button asChild size="lg" data-testid="btn-about-us">
                  <Link href="/about">
                    About Our Company <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Building photo panel */}
            <div className="lg:w-1/2 w-full h-[540px] rounded-2xl relative overflow-hidden shadow-2xl">
              <img
                src={WHY_US_IMAGE}
                alt="Construction site managed by PDC Engineers"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              {/* Gold gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent" />

              {/* Floating stat card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="bg-background/92 backdrop-blur-sm p-6 rounded-xl border border-border shadow-lg">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground italic text-sm leading-relaxed">
                    "{vision?.vision}"
                  </p>
                </div>
              </motion.div>

              {/* Top accent badge */}
              <div className="absolute top-5 right-5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow">
                Est. 2022
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Building Types CTA Banner ─────────────────────────────── */}
      <section
        className="relative py-24 overflow-hidden"
        data-testid="section-cta"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={BUILDING_IMAGES[1]}
            alt="Architectural blueprint and building"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-secondary/88" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-4">
              Our Building Types
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
              Structural &amp; Architectural Solutions for Every Build
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether it's a high-rise residential tower, an industrial steel shed, a government office
              complex, or a commercial mixed-use building — PDC delivers complete engineering and
              construction services tailored to your project.
            </p>

            {/* Building type pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                "Residential High-Rise",
                "Commercial Buildings",
                "Industrial Sheds & Factories",
                "Government & Institutional",
                "Mixed-Use Developments",
                "Steel Structure (PEB)",
                "Renovation & Retrofitting",
              ].map((type) => (
                <span
                  key={type}
                  className="border border-primary/40 text-primary bg-primary/10 text-sm font-medium px-4 py-2 rounded-full"
                >
                  {type}
                </span>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="px-10 font-semibold shadow-lg shadow-primary/30"
              data-testid="btn-cta-contact"
            >
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
