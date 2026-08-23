import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Building2, Mountain, Pencil, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useData } from "@/hooks/use-data";

const HERO_IMAGE = "/homePageHero.jpg";

const expertiseCards = [
  {
    id: "structural",
    title: "Structural Engineering",
    description:
      "Comprehensive structural analysis and design for residential, commercial, and industrial buildings, ensuring stability and safety under all conditions.",
    icon: Building2,
  },
  {
    id: "architectural",
    title: "Architectural Design",
    description:
      "Innovative spatial planning and aesthetic blueprinting tailored to client vision and environmental context.",
    icon: Pencil,
  },
  {
    id: "project-management",
    title: "Project Management",
    description:
      "End-to-end oversight ensuring projects are delivered on time, within budget, and to exact specifications.",
    icon: Wrench,
  },
  {
    id: "geotechnical",
    title: "Geotechnical Engineering",
    description:
      "Advanced soil analysis and foundation engineering for complex terrains.",
    icon: Mountain,
  },
];

export default function HomePage() {
  const { data: site, loading: siteLoading } = useData<any>("site.json");
  const { data: servicesData, loading: servicesLoading } =
    useData<any>("services.json");

  if (siteLoading || servicesLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent" />
      </div>
    );
  }

  const { company } = site || {};
  const divisions = servicesData?.departments?.length || 6;

  const stats = [
    { value: "27+", label: "Accomplished Projects" },
    { value: divisions.toString(), label: "Engineering Divisions" },
    {
      value: company?.established?.toString() || "2022",
      label: "Year Founded",
    },
    { value: "100%", label: "Safety Record" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section
        className="relative flex min-h-[58vh] flex-col overflow-hidden text-white"
        data-testid="section-hero"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="PDC Engineering and construction infrastructure"
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/70" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 top-0 z-10 w-px bg-gradient-to-b from-transparent via-gold to-transparent opacity-60" />

        <div className="container relative z-10 mx-auto flex flex-1 items-start px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl pt-14 pb-12 lg:pt-16 lg:pb-16">
            <div className="space-y-7">
              {/* ── Eyebrow badge + Heading share the same top line ── */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-2xl font-serif text-[36px] font-bold leading-[44px] tracking-[-0.02em] md:text-[56px] md:leading-[64px]"
                >
                  Engineering the World of Infrastructure
                </motion.h1>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mt-1 inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-4 py-1.5 font-sans text-xs font-bold uppercase leading-4 tracking-[0.1em] text-gold"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                  Established {company?.established || 2022} · Dhaka, Bangladesh
                </motion.div>
              </div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="max-w-2xl border-l-2 border-gold pl-5 font-sans text-lg leading-7 text-white/80"
              >
                Precision design, innovative planning, and structural integrity
                since 2022. We provide complete structural and architectural
                engineering solutions — from foundation design to full building
                construction.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-4 pt-2 sm:flex-row"
              >
                <Button
                  asChild
                  size="lg"
                  className="h-12 bg-gold px-8 font-sans text-sm font-semibold uppercase leading-5 tracking-widest text-white shadow-lg shadow-gold/20 hover:bg-gold/90"
                  data-testid="btn-work-with-us"
                >
                  <Link href="/contact">
                    Work With Us{" "}
                    <ArrowRight className="ml-2 h-4 w-4" strokeWidth={2} />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="h-12 border border-white/25 bg-transparent px-8 font-sans text-sm font-semibold uppercase leading-5 tracking-widest text-white hover:border-gold hover:bg-gold/10 hover:text-gold"
                  data-testid="btn-view-projects"
                >
                  <Link href="/projects">View Our Projects</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── Stats bar ───────────────────────────────────────────── */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 w-full border-t border-white/10 bg-[#272D3A]"
          data-testid="stats-bar"
        >
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-2 divide-y divide-white/10 sm:grid-cols-4 sm:divide-x sm:divide-y-0 sm:divide-white/10">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center py-7 text-center"
                >
                  <div className="font-serif text-[32px] font-bold leading-10 text-gold md:text-[40px] md:leading-[48px]">
                    {value}
                  </div>
                  <div className="mt-1 font-sans text-[10px] font-semibold uppercase leading-4 tracking-widest text-white/60">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Expertise / Services ────────────────────────────────── */}
      <section className="bg-background py-8" data-testid="section-services">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className=" font-sans text-xs font-bold uppercase leading-4 tracking-[0.1em] text-gold">
                What We Do
              </p>
              <h2 className="font-serif text-[32px] font-semibold leading-10 bg-[linear-gradient(135deg,#1a1a1a_0%,#3d2b1f_40%,#8B7355_70%,#C9A66B_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Engineering Solutions for Every Structure
              </h2>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-1 rounded-[6px] border-[1.5px] border-[#C9A66B] bg-transparent px-[22px] py-[10px] font-sans text-xs font-medium uppercase leading-4 tracking-[0.04em] text-[#8B7355] transition-all duration-[250ms] ease-in-out hover:border-[#C9A66B] hover:bg-[#C9A66B] hover:text-[#FBFAF9]"
            >
              Explore All Divisions
              <ArrowRight
                className="h-4 w-4 transition-transform duration-[250ms] ease-in-out group-hover:translate-x-1"
                strokeWidth={2}
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {expertiseCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-sm border border-[#D3DAEA] bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                  data-testid={`card-expertise-${card.id}`}
                >
                  <Icon className="mb-5 h-8 w-8 text-gold" strokeWidth={1.25} />
                  <h3 className="mb-3 font-serif text-2xl font-semibold leading-8 text-ink">
                    {card.title}
                  </h3>
                  <p className="mb-6 max-w-md font-sans text-base leading-6 text-ink/70">
                    {card.description}
                  </p>
                  <Link
                    href="/services"
                    className="group/link inline-flex items-center gap-1 font-sans text-xs font-bold uppercase leading-4 tracking-[0.1em] text-gold transition-all hover:gap-2"
                    data-testid={`link-expertise-${card.id}`}
                  >
                    View Details{" "}
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
