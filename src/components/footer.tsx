import { Github, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MdOutlineMarkEmailUnread } from "react-icons/md"

export default function Footer() {
  return (
    <div className="container mx-auto flex justify-between px-4 pb-10">
      <div className="flex items-center">
        <Image src={"/senseii-pink.png"} height={40} width={40} alt="senseii logo" />
        <h3 className="font-semibold">Senseii</h3>
      </div>
      <div className="flex gap-x-2">
        <a href="mailto:prateeksingh9741@gmail.com"><MdOutlineMarkEmailUnread className="text-2xl" /></a>
        <Link href={"https://github.com/Senseii-ai"}><Github /></Link>
        <Link href={"https://x.com/prateek_0041"}><Twitter /></Link>
      </div>
    </div>
  )
}
