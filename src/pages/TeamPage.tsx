import { motion } from "framer-motion";
import { useData } from "@/hooks/use-data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageHero from "@/components/PageHero";

export default function TeamPage() {
  const { data: servicesData, loading } = useData<any>("services.json");

  if (loading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  const departments = servicesData?.departments?.filter((d: any) => d.team && d.team.length > 0) || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-24 bg-background"
    >
      <PageHero
        badge="The People Behind PDC"
        title="Our Expert Team"
        subtitle="ICC-certified structural engineers, licensed architects, and experienced construction professionals — working together to deliver every project with precision."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=85"
        imageAlt="Construction engineers and professionals on site"
      />

      <div className="container mx-auto px-4 mt-16 space-y-20">
        
        {/* Core Departments */}
        {departments.map((dept: any, idx: number) => (
          <section key={dept.id}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-serif text-3xl font-bold text-foreground">{dept.name}</h2>
              <div className="h-px bg-border flex-1" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dept.team.map((member: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="text-xl font-bold text-foreground font-serif">{member.name}</div>
                      <div className="text-primary font-medium text-sm">{member.role}</div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {member.credentials?.map((cred: string, j: number) => (
                          <Badge key={j} variant="secondary" className="bg-muted text-muted-foreground hover:bg-muted/80">
                            {cred}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        ))}

        {/* Administration */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-serif text-3xl font-bold text-foreground">HR & Administration</h2>
            <div className="h-px bg-border flex-1" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="h-full border-border bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="text-xl font-bold text-foreground font-serif">MD. Kawser Alam</div>
                <div className="text-primary font-medium text-sm">Accounts & Admin Officer</div>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="bg-muted text-muted-foreground hover:bg-muted/80">
                  Administration
                </Badge>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </motion.div>
  );
}
