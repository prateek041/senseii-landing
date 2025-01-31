import { Button } from "./ui/button"

export default function Navbar() {
  return (
    <div className="container mx-auto px-2 flex items-center justify-between md:h-14 h-8 bg-transparent">
      <h4 className="md:text-3xl">Senseii</h4>
      <Button variant={"outline"}>
        About us
      </Button>
    </div>
  )
}
