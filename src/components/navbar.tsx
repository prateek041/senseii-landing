import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"

export default function Navbar() {
  return (
    <div className="container mx-auto px-2 flex items-center justify-between md:h-14 h-12 bg-transparent">
      <Link href="/" className="flex items-center">
        <Image src={"/senseii-pink.png"} alt="Senseii logo" width={50} height={50} />
        <h4 className="md:text-3xl font-semibold">Senseii</h4>
      </Link>
      <Link href={"https://github.com/Senseii-ai"}>
        <Button variant={"outline"}>
          About us
        </Button>
      </Link>
    </div>
  )
}
