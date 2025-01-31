import Link from "next/link"

export default function Footer() {
  return (
    <div className="container mx-auto flex justify-between px-4 pb-10">
      <h3>Senseii</h3>
      <div className="flex flex-col">
        <a href="mailto:prateeksingh9741@gmail.com">Contact</a>
        <Link href={"https://github.com/Senseii-ai"}>Github</Link>
        <Link href={"https://x.com/Senseii_ai"}>Twitter</Link>
      </div>
    </div>
  )
}
