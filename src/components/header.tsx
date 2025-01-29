import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="w-full h-full relative">
      <div
        className="w-full h-full bg-cover"
        style={{
          backgroundImage: `url('/grid-dark.jpg')`,
          opacity: "40%",
        }}
      ></div>
      <div className="container w-full h-full mx-auto flex items-end justify-center absolute top-0 inset-x-0">
        {/* Text Content */}
        <div className="w-full flex flex-col gap-y-4 justify-center items-center">
          <h1 className="text-center font-medium text-4xl">
            Unlock Your Best Self with Personalized Plans and real time
            tracking.
          </h1>
          <p className="text-center text-sm text-muted-foreground">
            An AI that knows what you want, exclusively built for you and does
            everything needed for you to achieve your goals.
          </p>
          <div className="flex gap-x-2">
            <Button>Try for Free</Button>
            <Button variant={"outline"}>Talk to the Team</Button>
          </div>

          {/* Video Content */}
          <div className="flex mt-10">
            <video src={"/demo-video.mp4"} className="w-full max-w-2xl"></video>
          </div>
        </div>
      </div>
    </div>
  );
}
