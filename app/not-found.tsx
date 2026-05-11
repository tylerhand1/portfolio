import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h2 className="text-4xl font-bold mb-2">404 - Page Not Found</h2>
      <p className="text-lg text-muted-foreground mb-8">
        It seems like you&apos;ve wandered into a route that doesn&apos;t exist.
      </p>
      <Button asChild size="lg" className="px-4">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
