import Image from "next/image";
import { CiStickyNote } from "react-icons/ci";
import { Separator } from "./ui/separator";

const pageContent = [
  {
    description: "Tell us about your current health status using natural language."
  },
  {
    description: "We'll explain your physical state, like BMI, BMR, and TDEE."
  },
  {
    description: "Our AI assistants generate personalized plans tailored to your goals."
  },
  {
    description: "Start your journey—track your progress and adjust as you go!"
  }
]

export default function Working() {
  return (
    <div className="h-full container mx-auto">
      <div className="flex flex-col items-center text-center justify-center">
        <div className="gap-y-2">
          <h4>How it works</h4>
          <h1> Getting started with Senseii is simple! Here&apos;s how it works:</h1>
        </div>
        <Image className="" src={"/mobile-demo.png"} height={400} width={400} alt="running image of senseii on a mobile phone" />
        <div className="flex flex-col gap-y-4 px-4">
          {pageContent.map((item, index) => {
            return (
              <div key={index} className="flex">
                <div className="">
                  <CiStickyNote className="text-5xl border p-2 rounded-xl" />
                </div>
                <div className="text-start">
                  <h4>Step {index}:</h4>
                  <p>
                    {item.description}
                  </p>
                  <Separator className="mt-5" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
