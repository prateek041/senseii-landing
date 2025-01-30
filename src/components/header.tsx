import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="w-full h-full relative">
      <div
        className="w-full h-full bg-cover"
        style={{
          backgroundImage: `url('/hero-bg.jpg')`,
          opacity: "40%",
        }}
      ></div>
      <div className="container w-full h-full mx-auto flex items-end justify-center absolute top-0 inset-x-0 px-4">
        {/* Text Content */}

        {/* Web View */}
        <div className="grid w-full h-full check grid-cols-6 grid-rows-6">
          <div className="row-start-2 flex flex-col gap-y-4 row-end-5 md:col-start-2 md:col-end-6 col-span-full">
            <h1 className="text-center md:font-semibold md:text-7xl font-medium text-4xl">
              Unlock Your Best Self with Personalized Plans and real time
              tracking.
            </h1>
            <p className="text-center md:text-2xl text-sm text-muted-foreground">
              An AI that knows what you want, exclusively built for you and does
              everything needed for you to achieve your goals.
            </p>
            <div className="flex gap-x-2 justify-center">
              <Button className="md:text-xl text-sm">Try for Free</Button>
              <Button variant={"outline"}>Talk to the Team</Button>
            </div>
          </div>

          <div className="md:row-start-4 md:row-end-7 row-start-4 row-span-full col-span-full flex justify-center ">
            <video src={"/demo-video.mp4"} className="w-full"></video>
          </div>
        </div>
      </div>
    </div>
  );
}
