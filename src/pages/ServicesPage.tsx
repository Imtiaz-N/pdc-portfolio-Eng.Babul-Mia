import { motion } from "framer-motion";
import { Building2, Pencil, HardHat, Zap, Flame, Mountain, ArrowRight } from "lucide-react";
import { useData } from "@/hooks/use-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import PageHero from "@/components/PageHero";

const iconMap: Record<string, any> = {
  Building2,
  Pencil,
  HardHat,
  Zap,
  Flame,
  Mountain,
};

export default function ServicesPage() {
  const { data: servicesData, loading } = useData<any>("services.json");

  if (loading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  const departments = servicesData?.departments || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-24 bg-background"
    >
      <PageHero
        badge="Engineering Expertise"
        title="Our Services"
        subtitle="Comprehensive structural, architectural, MEP, and civil construction services — from concept design to project completion, built to international standards."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=85"
        imageAlt="Architectural blueprint and structural design"
      />

      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {departments.map((dept: any, i: number) => {
            const Icon = iconMap[dept.icon] || Building2;
            return (
              <motion.div
                key={dept.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-border/50 bg-card hover:border-primary/50 transition-all shadow-sm">
                  <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                    <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-serif text-2xl mb-2">{dept.name}</CardTitle>
                      <CardDescription className="text-base text-muted-foreground leading-relaxed">
                        {dept.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4 border-t border-border mt-4 mx-6 mb-6 px-0">
                    <Dialog>
                      <DialogTrigger className="text-primary font-semibold flex items-center hover:underline group">
                        View Detailed Services <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl bg-card border-border">
                        <DialogHeader>
                          <DialogTitle className="font-serif text-2xl flex items-center gap-3">
                            <Icon className="h-6 w-6 text-primary" />
                            {dept.name} Services
                          </DialogTitle>
                          <DialogDescription>
                            Comprehensive service offerings in this department.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-4">
                          {dept.services?.map((service: string, j: number) => (
                            <div key={j} className="flex items-start gap-2">
                              <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                              <span className="text-foreground">{service}</span>
                            </div>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        {servicesData?.additionalServices && (
          <div className="mt-20 p-8 bg-secondary rounded-2xl text-secondary-foreground">
            <h2 className="font-serif text-2xl font-bold mb-6 text-white">Additional Competencies</h2>
            <div className="flex flex-wrap gap-3">
              {servicesData.additionalServices.map((service: string, i: number) => (
                <div key={i} className="bg-secondary-foreground/10 px-4 py-2 rounded-full text-sm font-medium border border-secondary-foreground/20">
                  {service}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
