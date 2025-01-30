import Features from "@/components/features";
import Header from "@/components/header";
import Working from "@/components/how.it.works";
import { ModeToggle } from "@/components/theme.toggler";

export default function Home() {
  return (
    <div className="flex w-screen h-full justify-between items-center">
      <div className="h-full space-y-10 w-full">
        <Header />
        <Features />
        <Working />
      </div>
      <div className="absolute top-0 right-0 p-2">
        <ModeToggle />
      </div>
    </div>
  );
}
