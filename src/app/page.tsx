import About from "@/components/about";
import Header from "@/components/header";
import { ModeToggle } from "@/components/theme.toggler";

export default function Home() {
  return (
    <div className="flex w-screen h-full justify-between items-center">
      <div className="h-full w-full">
        <Header />
        <About />
      </div>
      <div className="absolute top-0 right-0 p-2">
        <ModeToggle />
      </div>
    </div>
  );
}
