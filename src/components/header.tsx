import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div
      className="w-full h-full bg-center"
      style={{ backgroundImage: `url('/hero-bg.jpg')` }}
    >
      <div className="container mx-auto flex flex-col items-center md:justify-around justify-end px-4">
        {/* Text Content */}

        {/* Web View */}
        <div className="grid md:h-screen md:gap-y-10 items-center justify-center w-full grid-cols-6 grid-rows-6 ">
          <div className="row-start-1 flex flex-col md:gap-y-4 row-end-5 md:col-start-2 md:col-end-6 col-span-full">
            <h1 className="text-center md:font-semibold xl:text-7xl md:text-6xl font-medium text-4xl text-secondary-foreground">
              Unlock Your Best Self with Personalized Plans and real time
              tracking.
            </h1>
            <p className="text-center xl:text-2xl md:text-base text-sm">
              An AI that knows what you want, exclusively built for you and does
              everything needed for you to achieve your goals.
            </p>
            <div className="flex gap-x-2 justify-center">
              <Link href={"https://tally.so/r/mVb1pg"}>
                <Button>Try For Free</Button>
              </Link>
              <a href="mailto:prateeksingh9741@gmail.com">
                <Button variant={"outline"}>Talk to the Team</Button>
              </a>
            </div>
          </div>

          <div className="md:row-start-4 md:row-end-7 row-start-4 md:h-full col-span-full flex justify-center ">
            <video src={"/demo-video.mp4"} className="w-full md:max-w-4xl"></video>
          </div>
        </div>
      </div>
    </div>
  );
}
