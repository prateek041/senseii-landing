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
      <div className="flex flex-col w-full items-center justify-between gap-y-32">
        <div className="space-y-2">
          <Badge variant="outline">How it works</Badge>
          <h3 className="md:text-4xl">
            {" "}
            Getting started with Senseii is simple! Here&apos;s how it works:
          </h3>
        </div>
        <div className="md:flex space-y-10">
          <Image
            className="md:h-[700px] md:w-[700px]"
            src={"/mobile-demo.png"}
            height={400}
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
