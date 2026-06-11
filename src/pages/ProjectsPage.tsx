import { motion } from "framer-motion";
import { Building, MapPin } from "lucide-react";
import { useData } from "@/hooks/use-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import PageHero from "@/components/PageHero";

export default function ProjectsPage() {
  const { data: projectsData, loading } = useData<any>("projects.json");

  if (loading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
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
      <Card className="h-full border-border bg-card hover:border-primary/50 transition-colors">
        <CardContent className="p-6 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-start gap-3 mb-4">
              <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center shrink-0">
                <Building className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-lg leading-tight">{project.name}</h3>
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
      className="pb-24 bg-background"
    >
      <PageHero
        badge="Our Portfolio"
        title="Projects &amp; Achievements"
        subtitle="27+ accomplished projects across residential, commercial, and industrial sectors — from high-rise towers in Dhaka to industrial sheds and government offices nationwide."
        image="https://images.unsplash.com/photo-1590598795763-2f70685db69c?w=1920&q=85"
        imageAlt="Multi-storey building under construction"
      />

      <div className="container mx-auto px-4 mt-16">
        <Tabs defaultValue="accomplished" className="w-full">
          <TabsList className="w-full justify-start border-b border-border bg-transparent h-auto p-0 mb-8 rounded-none">
            <TabsTrigger 
              value="accomplished" 
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none px-6 py-3 font-serif text-lg"
            >
              Accomplished
            </TabsTrigger>
            <TabsTrigger 
              value="underConstruction" 
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none px-6 py-3 font-serif text-lg"
            >
              Under Construction
            </TabsTrigger>
            <TabsTrigger 
              value="recent" 
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none px-6 py-3 font-serif text-lg"
            >
              Recent Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="accomplished" className="animate-in fade-in-50 duration-500">
            <div className="rounded-xl border border-border overflow-hidden bg-card">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-muted">
                    <TableRow className="hover:bg-muted">
                      <TableHead className="w-16 text-center text-foreground font-bold">SL</TableHead>
                      <TableHead className="text-foreground font-bold">Project Name</TableHead>
                      <TableHead className="text-foreground font-bold">Location</TableHead>
                      <TableHead className="text-foreground font-bold">Client</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {accomplished?.map((project: any) => (
                      <TableRow key={project.sl} className="hover:bg-muted/50 transition-colors">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {underConstruction?.map((p: any, i: number) => renderProjectCard(p, i))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="animate-in fade-in-50 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentProjects?.map((p: any, i: number) => renderProjectCard(p, i))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
}
