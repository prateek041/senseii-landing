import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3,
  Brain,
  Clock,
  Cog,
  FileText,
  Globe,
  ShieldCheck,
  Zap
} from "lucide-react";

const features = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Personalized Plans",
    description: "Get AI-powered, customized diet and workout plans tailored to your body type, fitness goals, and lifestyle."
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Track your Goals",
    description: "If you have any specific goals, track them over a week, month or even years."
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Understand Yourself",
    description: `No more guessing what your vitals mean. Senseii explains it for you.`
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Real Time Coaching",
    description: `Get Workout Feedback in Real Time. Know when you are exerting yourself, or can do better.`
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Natural Language Interface",
    description: "Interact with the app in your native language, No need for manual calorie counting as well. Just type what you ate in simple words "
  },
  {
    icon: <Cog className="h-6 w-6" />,
    title: "Universal Integration",
    description: "Auto-Sync with other tools like MyFitnessPal, Strava, Oura, etc., and get weekly health summaries on both platforms iOS and Android."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "24x7 Support",
    description: "Our team is available round the clock to answer your queries, provide guidance, and keep you motivated on your health journey."
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Enterprise Security",
    description: "Keep your data safe with our enterprise-grade security protocols."
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Powerful Features for Your Health
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Our platform is packed with everything you need to succeed in living a healthy life.
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
