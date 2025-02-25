import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "$12",
    description: "Perfect for small businesses just getting started.",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "24/7 email support",
      "API access"
    ],
    popular: false,
    buttonText: "Get Started"
  },
  {
    name: "Professional",
    price: "$49",
    description: "For growing teams looking to scale operations.",
    features: [
      "Up to 20 team members",
      "50GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom integrations",
      "Team collaboration tools"
    ],
    popular: true,
    buttonText: "Get Started"
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large organizations with complex requirements.",
    features: [
      "Unlimited team members",
      "500GB storage",
      "Enterprise analytics",
      "24/7 priority support",
      "API access",
      "Custom integrations",
      "Team collaboration tools",
      "Advanced security features",
      "Dedicated account manager"
    ],
    popular: false,
    buttonText: "Contact Sales"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Choose the perfect plan for your business needs. No hidden fees, no surprises.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-6 py-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={plan.popular ? 'border-primary shadow-md relative' : ''}
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
              <CardContent>
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
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
