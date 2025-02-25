import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "SaaSify has completely transformed how our team collaborates. The intuitive interface and powerful features have boosted our productivity by 35%.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
  },
  {
    quote:
      "As a small business owner, I was looking for an affordable solution that wouldn&apos;t compromise on features. SaaSify delivered exactly that and more.",
    author: "Michael Chen",
    role: "Founder, GreenLeaf Solutions",
  },
  {
    quote:
      "The analytics provided by SaaSify have given us insights we never had before. We&apos;ve been able to optimize our workflow and cut costs significantly.",
    author: "Emily Rodriguez",
    role: "Operations Director, BlueWave Media",
  },
  {
    quote:
      "The customer support team at SaaSify is exceptional. They&apos;re responsive, knowledgeable, and genuinely care about helping us succeed.",
    author: "David Thompson",
    role: "IT Manager, Global Enterprises",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trusted by Businesses Worldwide
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Don&apos;t just take our word for it. Here&apos;s what our
              customers have to say.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/40" />
                </div>
                <p className="text-lg">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
