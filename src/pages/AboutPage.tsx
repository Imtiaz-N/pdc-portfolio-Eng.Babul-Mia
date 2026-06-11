import { motion } from "framer-motion";
import { Quote, CheckCircle2 } from "lucide-react";
import { useData } from "@/hooks/use-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import PageHero from "@/components/PageHero";

export default function AboutPage() {
  const { data: site, loading } = useData<any>("site.json");

  if (loading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  const { about, vision, leadership, policies } = site || {};
  const leader = leadership?.[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-24"
    >
      <PageHero
        badge="Who We Are"
        title="About PDC Engineers"
        subtitle="A fast-growing multidisciplinary engineering and construction organization delivering structural, architectural, and civil solutions since 2022."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85"
        imageAlt="Glass office building facade"
      />

      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <section>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Company Overview</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                <p>{about?.summary}</p>
                <p>{about?.description}</p>
                <p>{about?.culture}</p>
                <p>{about?.resources}</p>
              </div>
            </section>

            <section className="bg-secondary/5 p-8 rounded-2xl border border-border">
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Our Objectives</h2>
              <p className="text-lg text-muted-foreground mb-6">{vision?.objectives}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vision?.mission?.map((m: string, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{m}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Integrated Management System (IMS) Policies</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="quality" className="border-border">
                  <AccordionTrigger className="text-lg font-serif hover:text-primary">Quality Policy</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pt-2">
                      {policies?.quality?.map((p: string, i: number) => (
                        <li key={i} className="flex gap-2 text-muted-foreground">
                          <span className="text-primary">•</span> {p}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="health" className="border-border">
                  <AccordionTrigger className="text-lg font-serif hover:text-primary">Health & Safety Policy</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pt-2">
                      {policies?.healthSafety?.map((p: string, i: number) => (
                        <li key={i} className="flex gap-2 text-muted-foreground">
                          <span className="text-primary">•</span> {p}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="environment" className="border-border">
                  <AccordionTrigger className="text-lg font-serif hover:text-primary">Environment Policy</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pt-2">
                      {policies?.environment?.map((p: string, i: number) => (
                        <li key={i} className="flex gap-2 text-muted-foreground">
                          <span className="text-primary">•</span> {p}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </div>

          {/* Sidebar / Leadership */}
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <h2 className="font-serif text-2xl font-bold mb-6 text-foreground">Leadership</h2>
              {leader && (
                <Card className="border-border overflow-hidden bg-card shadow-md">
                  <div className="aspect-square relative bg-secondary">
                    <img 
                      src={`${import.meta.env.BASE_URL}business-card.jpeg`} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground">{leader.name}</h3>
                    <p className="text-primary font-medium text-sm mb-4">{leader.title}</p>
                    
                    <div className="space-y-1 mb-6">
                      {leader.credentials?.map((cred: string, i: number) => (
                        <p key={i} className="text-xs text-muted-foreground">{cred}</p>
                      ))}
                    </div>

                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20 rotate-180" />
                      <p className="text-sm italic text-foreground relative z-10 pl-4 border-l-2 border-primary">
                        {leader.quote}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
