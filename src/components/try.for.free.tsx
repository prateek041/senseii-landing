import Link from "next/link";
import { Button } from "./ui/button";

export default function TryForFree() {
  return (
    <Link href={"https://tally.so/r/mVb1pg"}>
      <Button variant={"outline"} size={"sm"}>Try For Free</Button>
    </Link>
  )
}
