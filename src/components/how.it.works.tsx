import Image from "next/image";
import { CiStickyNote } from "react-icons/ci";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

const pageContent = [
  {
    description:
      "Talk about your current health status using natural language.",
  },
  {
    description: "Senseii will explain your physical state, like BMI, BMR, and TDEE.",
  },
  {
    description:
      "Our AI assistants generate personalized plans tailored to your goals.",
  },
  {
    description: "Start your journey—track your progress and adjust as you go!",
  },
];

export default function Working() {
  return (
    <div className="container flex flex-col w-full items-center justify-center text-center py-5 mx-auto">
      <div className="flex flex-col w-full items-center justify-between md:gap-y-32 gap-y-12">
        <div className="space-y-2">
          <Badge variant="outline">How it works</Badge>
          <h3 className="md:text-4xl">
            {" "}
            Getting started with Senseii is simple! Here&apos;s how it works:
          </h3>
        </div>
        <div className="flex md:flex-row flex-col items-center bg-red-50 gap-x-4 space-y-8 md:space-y-10 mx-2">
          <Image
            className="p-2 rounded-2xl bg-zinc-400"
            src={"/mobile-demo.png"}
            height={600}
            width={400}
            alt="running image of senseii on a mobile phone"
          />
          <div className="flex flex-col justify-start px-4">
            {pageContent.map((item, index) => {
              return (
                <div key={index} className="flex md:my-2 md:gap-x-2">
                  <div className="">
                    <CiStickyNote className="md:text-4xl text-3xl border rounded-sm" />
                  </div>
                  <div className="text-start md:space-y-5">
                    <h5 className="md:text-2xl">Step {index + 1}:</h5>
                    <p className="md:text-lg">{item.description}</p>
                    <Separator className="my-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
