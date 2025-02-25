import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3,
  Clock,
  Code,
  Cog,
  FileText,
  Globe,
  ShieldCheck,
  Zap
} from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights with our comprehensive analytics dashboard."
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Enterprise Security",
    description: "Keep your data safe with our enterprise-grade security protocols."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized infrastructure."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Reach",
    description: "Connect with customers around the world with our CDN-backed platform."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "24/7 Support",
    description: "Our support team is available round the clock to assist you."
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "API Access",
    description: "Integrate with our robust API for customized solutions."
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Documentation",
    description: "Comprehensive documentation to help you get the most out of our platform."
  },
  {
    icon: <Cog className="h-6 w-6" />,
    title: "Customizable",
    description: "Tailor the platform to your specific needs with extensive customization options."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Powerful Features for Your Business
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Our platform is packed with everything you need to succeed in today's competitive market.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
          {features.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="p-2 bg-primary/10 w-fit rounded-md mb-3">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
