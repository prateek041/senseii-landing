import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Yourself?
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl">
              Join thousands of satisfied customers who have achieved their health goals with Senseii.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={"https://tally.so/r/mVb1pg"}>
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <a href="mailto:prateeksingh9741@gmail.com">
              <Button size="lg" className="border-primary-foreground border text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule Demo
              </Button>
            </a>

          </div>
          <p className="text-sm">No credit card required. 14-day free trial.</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
