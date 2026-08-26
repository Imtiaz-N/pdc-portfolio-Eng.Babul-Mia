import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Building, MapPin } from "lucide-react";
import { useData } from "@/hooks/use-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import PageHero from "@/components/PageHero";
import { projectImageSrc } from "@/lib/project-image";

const FILTERS = ["All Projects", "Institutional", "Commercial", "Residential", "Industrial"];

export default function ProjectsPage() {
  const { data: projectsData, loading } = useData<any>("projects.json");
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const featured = projectsData?.featured || [];

  const visibleProjects = useMemo(
    () =>
      activeFilter === "All Projects"
        ? featured
        : featured.filter((p: any) => p.category === activeFilter),
    [featured, activeFilter]
  );

  if (loading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent" />
      </div>
    );
  }

  const { accomplished, underConstruction, recentProjects } = projectsData || {};

  const renderProjectCard = (project: any, i: number) => (
    <motion.div
      key={i}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: i * 0.05 }}
    >
      <Card className="h-full border-border bg-card transition-colors hover:border-gold/50">
        <CardContent className="flex h-full flex-col justify-between p-6">
          <div>
            <div className="mb-4 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-gold/10">
                <Building className="h-5 w-5 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-bold leading-tight">{project.name}</h3>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{project.location}</span>
              </div>
              {project.client && (
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">Client:</span>
                  <span>{project.client}</span>
                </div>
              )}
              {project.type && (
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">Type:</span>
                  <span>{project.type}</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background pb-24"
    >
      <PageHero
        badge="Our Portfolio"
        title="Our Portfolio of Excellence"
        subtitle="A curated selection of our most challenging and impactful engineering feats — spanning structural innovation and precise execution across diverse sectors."
        image={`${import.meta.env.BASE_URL}projectPage.jpg`}
        imageAlt="PDC Engineers project portfolio"
      />

      {/* ── Featured project cards ─────────────────────────────── */}
      <section className="container mx-auto px-6 pt-20 md:px-12 lg:px-16">
        <div className="mb-12 flex flex-wrap items-center justify-center gap-8 border-b border-[#D3DAEA] pb-4">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative pb-3 font-sans text-xs font-bold uppercase leading-4 tracking-[0.1em] transition-colors ${
                activeFilter === filter ? "text-ink" : "text-ink/50 hover:text-gold"
              }`}
              data-testid={`filter-${filter}`}
            >
              {filter}
              {activeFilter === filter && (
                <motion.span
                  layoutId="project-filter-underline"
                  className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-gold"
                />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {visibleProjects.map((project: any, i: number) => (
            <motion.article
              key={project.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -10, scale: 1.015 }}
              className={`group relative overflow-hidden rounded-sm border border-[#D3DAEA] shadow-sm transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] ${
                i % 3 === 0 ? "md:col-span-2" : ""
              }`}
              data-testid={`card-project-${project.id}`}
            >
              <Link href={`/projects/${project.id}`} className="block">
                <div className="relative h-[400px] w-full overflow-hidden md:h-[430px]">
                  <img
                    src={projectImageSrc(project.image)}
                    alt={project.name}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent transition-opacity duration-300 group-hover:from-ink/90" />

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <span className="mb-3 inline-block bg-gold px-2.5 py-1 font-sans text-[10px] font-bold uppercase leading-4 tracking-[0.1em] text-white">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-[28px] font-bold leading-9 text-white">
                      {project.name}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                      <span className="flex items-center gap-1.5 font-sans text-sm text-white/80">
                        <MapPin className="h-4 w-4 text-gold" strokeWidth={1.75} />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-all group-hover:gap-2.5">
                        View Case Study
                        <ArrowRight className="h-3.5 w-3.5 text-gold" strokeWidth={2} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <p className="py-16 text-center font-sans text-base text-ink/60">
            No projects in this category yet.
          </p>
        )}
      </section>

      {/* ── Full project register ──────────────────────────────── */}
      <section className="container mx-auto px-6 pt-24 md:px-12 lg:px-16">
        <div className="mb-10">
          <p className="mb-2 font-sans text-xs font-bold uppercase leading-4 tracking-[0.1em] text-gold">
            Complete Register
          </p>
          <h2 className="font-serif text-[32px] font-semibold leading-10 text-ink">
            Every Project We Have Delivered
          </h2>
        </div>

        <Tabs defaultValue="accomplished" className="w-full">
          <TabsList className="mb-8 h-auto w-full justify-start rounded-none border-b border-[#D3DAEA] bg-transparent p-0">
            {[
              { value: "accomplished", label: "Accomplished" },
              { value: "underConstruction", label: "Under Construction" },
              { value: "recent", label: "Recent Projects" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="rounded-none px-6 py-3 font-serif text-lg data-[state=active]:border-b-2 data-[state=active]:border-gold data-[state=active]:bg-transparent data-[state=active]:text-gold"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="accomplished" className="animate-in fade-in-50 duration-500">
            <div className="overflow-hidden rounded-sm border border-[#D3DAEA] bg-card">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-muted">
                    <TableRow className="hover:bg-muted">
                      <TableHead className="w-16 text-center font-bold text-foreground">SL</TableHead>
                      <TableHead className="font-bold text-foreground">Project Name</TableHead>
                      <TableHead className="font-bold text-foreground">Location</TableHead>
                      <TableHead className="font-bold text-foreground">Client</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {accomplished?.map((project: any) => (
                      <TableRow key={project.sl} className="transition-colors hover:bg-muted/50">
                        <TableCell className="text-center font-medium">{project.sl}</TableCell>
                        <TableCell className="font-semibold">{project.name}</TableCell>
                        <TableCell className="text-muted-foreground">{project.location}</TableCell>
                        <TableCell className="text-muted-foreground">{project.client}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="underConstruction" className="animate-in fade-in-50 duration-500">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {underConstruction?.map((p: any, i: number) => renderProjectCard(p, i))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="animate-in fade-in-50 duration-500">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recentProjects?.map((p: any, i: number) => renderProjectCard(p, i))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </motion.div>
  );
}
