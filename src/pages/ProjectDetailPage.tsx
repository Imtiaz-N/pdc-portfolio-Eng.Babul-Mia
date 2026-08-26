import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useData } from "@/hooks/use-data";
import { projectImageSrc } from "@/lib/project-image";

export default function ProjectDetailPage() {
  const [, params] = useRoute("/projects/:id");
  const { data: projectsData, loading } = useData<any>("projects.json");

  if (loading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent" />
      </div>
    );
  }

  const featured = projectsData?.featured || [];
  const project = featured.find((p: any) => p.id === params?.id);

  if (!project) {
    return (
      <div className="container mx-auto flex min-h-[50vh] flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="font-serif text-[32px] font-semibold leading-10 text-ink">
          Project Not Found
        </h1>
        <p className="font-sans text-base text-ink/60">
          The project you are looking for is not in our portfolio yet.
        </p>
        <Button
          asChild
          className="bg-gold font-sans text-sm font-semibold uppercase tracking-widest text-white hover:bg-gold/90"
        >
          <Link href="/projects">Back to Portfolio</Link>
        </Button>
      </div>
    );
  }

  const related = featured.filter((p: any) => p.id !== project.id).slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background pb-24"
    >
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[58vh] items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={projectImageSrc(project.image)}
            alt={project.name}
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/55 to-ink/25" />
        </div>

        <div className="container relative z-10 mx-auto px-6 py-16 md:px-12 lg:px-16">
          <Link
            href="/projects"
            className="mb-6 inline-flex items-center gap-2 font-sans text-xs font-bold uppercase leading-4 tracking-[0.1em] text-white/70 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} /> Back to Portfolio
          </Link>

          <span className="mb-4 inline-block bg-gold px-2.5 py-1 font-sans text-[10px] font-bold uppercase leading-4 tracking-[0.1em] text-white">
            {project.category}
          </span>

          <h1 className="max-w-4xl font-serif text-[40px] font-bold leading-[48px] tracking-[-0.02em] text-white md:text-[56px] md:leading-[64px]">
            {project.name}
          </h1>

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-sans text-sm text-white/80">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" strokeWidth={1.75} />
              {project.location}
            </span>
            <span className="flex items-center gap-2">
              <User className="h-4 w-4 text-gold" strokeWidth={1.75} />
              {project.client}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gold" strokeWidth={1.75} />
              {project.year} · {project.status}
            </span>
          </div>
        </div>
      </section>

      {/* ── Key facts strip ─────────────────────────────────────── */}
      <section className="w-full border-t border-white/10 bg-[#272D3A]">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 gap-6 py-7 sm:grid-cols-4">
            {project.facts?.map((fact: any) => (
              <div key={fact.label}>
                <div className="font-serif text-[28px] font-bold leading-9 text-gold md:text-[32px] md:leading-10">
                  {fact.value}
                </div>
                <div className="mt-1 font-sans text-[10px] font-semibold uppercase leading-4 tracking-widest text-white/60">
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body ────────────────────────────────────────────────── */}
      <section className="container mx-auto grid grid-cols-1 gap-12 px-6 py-20 md:px-12 lg:grid-cols-3 lg:px-16">
        <div className="lg:col-span-2">
          <p className="mb-2 font-sans text-xs font-bold uppercase leading-4 tracking-[0.1em] text-gold">
            Project Overview
          </p>
          <h2 className="mb-6 font-serif text-[32px] font-semibold leading-10 text-ink">
            {project.summary}
          </h2>
          <p className="font-sans text-lg leading-7 text-ink/70">{project.description}</p>

          <div className="mt-10 border-l-2 border-gold bg-white p-8 shadow-sm">
            <p className="font-sans text-base leading-6 text-ink/70">
              Detailed drawings, structural calculations and construction photographs for this
              project will be published here shortly.
            </p>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="rounded-sm border border-[#D3DAEA] bg-white p-8 shadow-sm">
            <h3 className="mb-5 font-serif text-2xl font-semibold leading-8 text-ink">
              Scope of Work
            </h3>
            <ul className="space-y-3">
              {project.scope?.map((item: string) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                  <span className="font-sans text-base leading-6 text-ink/70">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="mt-8 w-full bg-gold font-sans text-sm font-semibold uppercase tracking-widest text-white hover:bg-gold/90"
            >
              <Link href="/contact">
                Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" strokeWidth={2} />
              </Link>
            </Button>
          </div>
        </aside>
      </section>

      {/* ── Related ─────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="container mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="mb-8 font-serif text-[32px] font-semibold leading-10 text-ink">
            More Projects
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {related.map((p: any) => (
              <motion.article
                key={p.id}
                whileHover={{ y: -10, scale: 1.015 }}
                className="group overflow-hidden rounded-sm border border-[#D3DAEA] shadow-sm transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
              >
                <Link href={`/projects/${p.id}`} className="block">
                  <div className="relative h-[300px] w-full overflow-hidden">
                    <img
                      src={projectImageSrc(p.image)}
                      alt={p.name}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="mb-2 inline-block bg-gold px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                        {p.category}
                      </span>
                      <h3 className="font-serif text-xl font-bold leading-7 text-white">{p.name}</h3>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>
      )}
    </motion.div>
  );
}
