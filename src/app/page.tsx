import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Working from "@/components/how.it.works";

export default function Home() {
  return (
    <div className="h-full flex flex-col gap-y-10 w-full">
      <Header />
      <Features />
      <Working />
      <Footer />
    </div>
  );
}
