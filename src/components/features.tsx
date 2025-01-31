import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";

const FeatureCard = ({ heading, index, content }: { heading: string, index: number, content: string }) => {
  return (
    <Card className="col-span-1 h-full">
      <CardHeader className="md:gap-y-5">
        <Badge className="w-fit" variant={"secondary"}>
          0{index + 1}:
        </Badge>
        <h4 className="md:text-3xl">{heading}</h4>
      </CardHeader>
      <CardContent>
        <p className="md:text-lg text-sm">
          {content}
        </p>
      </CardContent>
    </Card>
  )
}

const pageContent = [
  {
    heading: "Generate Personalized Diet & Workout Plans",
    content: `Get AI-powered, customized diet and workout plans tailored to your body type, fitness goals, and lifestyle. Whether you're looking to lose weight, gain muscle, or stay fit, our AI adapts to your needs and preferences.`
  },
  {
    heading: "Track Your Meals Using Natural Language",
    content: `No need for manual calorie counting! Just type what you ate in simple words`
  },
  {
    heading: "Modify Plans to Suit Your Preferences",
    content: `Your health journey, your choices! Easily tweak your diet or workout routine based on your taste, schedule, or dietary restrictions. Our AI ensures you stay on track without compromising your comfort.`
  },
  {
    heading: "24/7 support",
    content: `Our team is available round the clock to answer your queries, provide guidance, and keep you motivated on your health journey. Get personalized advice, tips, and recommendations whenever you need them.`
  }

]

export default function Features() {
  return (
    <div className="">
      <div className="md:h-[800px] container flex flex-col items-center justify-around mx-auto space-y-5 md:space-y-10">
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <Badge variant="outline">Features</Badge>
          <h3 className="md:text-4xl">Define, Follow, Progress</h3>
          <p className="text-center md:text-lg text-sm">
            Get to know what you want, Finalise a plan to follow and get real
            time, AI driven progress tracking
          </p>
        </div>
        <div className="md:grid grid-cols-4 grid-rows-1 gap-x-2 flex md:h-[450px] flex-col gap-y-2 mx-auto px-2 items-end justify-center">
          {pageContent.map((item, index) => {
            return (
              <FeatureCard key={index} content={item.content} heading={item.heading} index={index} />
            )
          })}
        </div>
      </div>
      <Separator className="my-2" />
    </div>
  );
}
