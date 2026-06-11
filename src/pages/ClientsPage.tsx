import { motion } from "framer-motion";
import { Handshake, HeartHandshake } from "lucide-react";
import { useData } from "@/hooks/use-data";
import { Card, CardContent } from "@/components/ui/card";
import PageHero from "@/components/PageHero";

export default function ClientsPage() {
  const { data: clientsData, loading } = useData<any>("clients.json");

  if (loading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  const { clients, csr } = clientsData || {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-24 bg-background"
    >
      <PageHero
        badge="Trusted Partnerships"
        title="Our Valued Clients"
        subtitle="Trusted by developers, government bodies, garment manufacturers, and leading real estate companies across Bangladesh — built on delivery, not just promises."
        image="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=85"
        imageAlt="Corporate office building exterior"
      />

      <div className="container mx-auto px-4 mt-16">
        
        <section className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients?.map((client: string, i: number) => (
              <motion.div
                key={i}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.03 }}
              >
                <Card className="h-full border-border bg-card flex items-center justify-center p-6 text-center hover:border-primary/50 hover:shadow-md transition-all group">
                  <span className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {client}
                  </span>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-secondary/5 rounded-3xl p-8 md:p-12 border border-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground">Corporate Social Responsibility</h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {csr?.description}
            </p>

            <div className="space-y-4">
              <h3 className="font-serif font-bold text-xl text-foreground">Our Initiatives</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {csr?.initiatives?.map((initiative: string, i: number) => (
                  <Card key={i} className="bg-card border-border">
                    <CardContent className="p-6 flex items-start gap-4">
                      <Handshake className="h-6 w-6 text-primary shrink-0" />
                      <p className="text-foreground">{initiative}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </motion.div>
  );
}
