import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28rem] font-bold text-muted/60 leading-none tracking-tighter">
          404
        </div>
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto px-6">
        {/* Glowing accent dot */}
        <div className="mx-auto mb-8 h-3 w-3 rounded-full bg-primary shadow-[0_0_24px_8px_hsl(var(--primary)/0.35)]" />

        <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 tracking-tight">
          Page not found
        </h1>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          The page{" "}
          <code className="text-sm bg-muted px-2 py-1 rounded-md text-foreground font-mono">
            {location.pathname}
          </code>{" "}
          doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" onClick={() => window.history.back()}>
            <button type="button" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
