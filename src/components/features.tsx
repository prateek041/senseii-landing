import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";

export default function Features() {
  return (
    <div className="h-full">
      <div className="container space-y-5">
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <Badge variant="outline">Features</Badge>
          <h3>Define, Follow, Progress</h3>
          <p className="text-center text-sm">Get to know what you want, Finalise a plan to follow and get real time, AI driven progress tracking</p>
        </div>
        <div className="flex flex-col gap-y-2 mx-auto px-2 items-end justify-center">
          <Card>
            <CardHeader>
              <Badge className="w-fit" variant={"secondary"}>01:</Badge>
              <h4>Generate Personalized Diet & Workout Plans</h4>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Get AI-powered, customized diet and workout plans tailored to your
                body type, fitness goals, and lifestyle. Whether you&apos;re
                looking to lose weight, gain muscle, or stay fit, our AI adapts to
                your needs and preferences.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Badge className="w-fit" variant={"secondary"}>02:</Badge>
              <h4> Track Your Meals Using Natural Language</h4>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                No need for manual calorie counting! Just type what you ate in simple words
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Badge className="w-fit" variant={"secondary"}>03:</Badge>
              <h4>Modify Plans to Suit Your Preferences</h4>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Your health journey, your choices! Easily tweak your diet or workout routine based on your taste, schedule, or dietary restrictions. Our AI ensures you stay on track without compromising your comfort.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Badge className="w-fit" variant={"secondary"}>03:</Badge>
              <h4>24/7 support</h4>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Our team is available round the clock to answer your queries, provide guidance, and keep you motivated on your health journey. Get personalized advice, tips, and recommendations whenever you need them.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Separator className="my-2" />
    </div>
  );
}
