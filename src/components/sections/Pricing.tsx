import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$20",
    description: "Perfect for testing out the product.",
    features: [
      "Up to 1 Goal supported",
      "Get your Plans generated",
      "Natural Language Meal Tracking",
      "Basic analytics",
      "24/7 email support",
    ],
    popular: false,
    buttonText: "Get Started",
  },
  {
    name: "Professional",
    price: "$299",
    description:
      "For fitness enthusiasts willing to achieve their long term goals.",
    features: [
      "Up to 10 Goals supported",
      "Get your Plans generated",
      "Natural Language Meal Tracking",
      "Advanced analytics",
      "Access Real time tracking",
      "Priority support",
      "Integrate with other Apps",
      "Compete with your peers",
    ],
    popular: true,
    buttonText: "Get Started",
  },
  {
    name: "Family",
    price: "$499",
    description: "Enable your entire family to lead a healthy life.",
    features: [
      "Up to 50 Goals",
      "Get your Plans generated",
      "Natural Language Meal Tracking",
      "Advanced analytics",
      "Access Real time tracking",
      "Priority support",
      "Integrate with other Apps",
      "Compete with your peers",
      "24/7 priority support",
      "Advanced security features",
    ],
    popular: false,
    buttonText: "Contact Sales",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Choose the perfect plan for your or your family needs. No hidden fees,
              no surprises.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-6 py-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col ${plan.popular ? "border-primary shadow-md relative" : ""
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 md:translate-x-1/3 -translate-y-1/3 bg-primary text-primary-foreground text-xs font-bold rounded-full px-3 py-1">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link className="w-full" href={"https://tally.so/r/mVb1pg"}>
                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className="w-full"
                  >
                    {plan.buttonText}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
