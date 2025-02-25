import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl max-w-3xl md:text-5xl lg:text-6xl">
              Unlock Your Best Self with Personalized Plans and Real Time
              tracking.
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              An AI that knows what you want, exclusively built for you and does
              everything needed for you to achieve your goals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={"https://tally.so/r/mVb1pg"}>
              <Button className="px-8">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="mailto:prateeksingh9741@gmail.com">
              <Button className="px-8" variant={"outline"}>Talk to the Team</Button>
            </a>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-lg border shadow-xl">
            <div className="bg-muted aspect-video"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <video src={"/demo.mp4"} autoPlay={false} controls className="w-full md:max-w-4xl"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
