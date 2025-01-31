import Link from "next/link";
import { Button } from "./ui/button";

export default function TryForFree() {
  return (
    <Link href={"https://app.senseii.in/"}>
      <Button variant={"outline"} size={"sm"}>Try For Free</Button>
    </Link>
  )
}
