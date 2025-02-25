import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Simplify Your Business Operations with SaaSify
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              The all-in-one platform designed to streamline your workflow, boost productivity,
              and help your business grow.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="px-8">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">
              Book a Demo
            </Button>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-lg border shadow-xl">
            <div className="bg-muted aspect-video"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-lg font-medium">Product Screenshot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
