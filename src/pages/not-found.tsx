import { Link } from "wouter";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <AlertCircle className="mx-auto h-16 w-16 text-primary" />
        <h1 className="font-serif text-5xl font-bold text-foreground">404</h1>
        <p className="text-xl text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Button asChild size="lg" className="mt-4">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}
