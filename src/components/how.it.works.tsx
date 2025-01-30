import Image from "next/image";
import { CiStickyNote } from "react-icons/ci";
import { Separator } from "./ui/separator";

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
    <div className="container flex flex-col items-center justify-center text-center mx-auto">
      <div className="flex flex-col gap-y-5">
        <div className="gap-y-2">
          <h4>How it works</h4>
          <h3>
            {" "}
            Getting started with Senseii is simple! Here&apos;s how it works:
          </h3>
        </div>
        <Image
          className=""
          src={"/mobile-demo.png"}
          height={400}
          width={400}
          alt="running image of senseii on a mobile phone"
        />
        <div className="flex flex-col px-4">
          {pageContent.map((item, index) => {
            return (
              <div key={index} className="flex">
                <div className="">
                  <CiStickyNote className="text-3xl border rounded-sm" />
                </div>
                <div className="text-start">
                  <h5>Step {index}:</h5>
                  <p>{item.description}</p>
                  <Separator className="my-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
