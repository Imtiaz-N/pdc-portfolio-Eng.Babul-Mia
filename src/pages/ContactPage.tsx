import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building, Send } from "lucide-react";
import { useData } from "@/hooks/use-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  const { data: site, loading } = useData<any>("site.json");

  if (loading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  const { company } = site || {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-24 bg-background"
    >
      <PageHero
        badge="Get in Touch"
        title="Contact Us"
        subtitle="Ready to start your next building project? Reach our engineering team in Banasree, Dhaka — we respond promptly and deliver thoroughly."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85"
        imageAlt="Modern office interior"
      />

      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Our Office</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Address</h3>
                  <p className="text-muted-foreground">{company?.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Phone</h3>
                  {company?.phones?.map((phone: string, i: number) => (
                    <p key={i} className="text-muted-foreground">{phone}</p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Email</h3>
                  <p className="text-muted-foreground">{company?.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Bank Information</h3>
                  <p className="text-muted-foreground font-medium">{company?.bank}</p>
                  <p className="text-muted-foreground text-sm">{company?.bankAccount}</p>
                </div>
              </div>
            </div>

            <div className="w-full h-[300px] rounded-xl overflow-hidden border border-border mt-8">
              <iframe
                src="https://maps.google.com/maps?q=Banasree+Dhaka&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PDC Office Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-border bg-card shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name</label>
                    <Input id="name" placeholder="John Doe" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address</label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-foreground">Subject</label>
                    <Input id="subject" placeholder="Project Inquiry" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project requirements..." 
                      className="min-h-[150px] bg-background"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-base">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
