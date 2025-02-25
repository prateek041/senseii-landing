"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky px-2 top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center gap-x-1">
              <Image
                src={"/senseii-pink.png"}
                height={30}
                width={30}
                alt="logo"
              />
              <span className="font-bold text-xl">Senseii</span>
            </div>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-primary"
            >
              Pricing
            </Link>
            {/* <Link href="#testimonials" className="text-sm font-medium hover:text-primary"> */}
            {/*   Testimonials */}
            {/* </Link> */}
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-primary"
            >
              FAQ
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center">
          <Link href="https://tally.so/r/mVb1pg">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden container py-4 bg-background">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            {/* <Link */}
            {/*   href="#testimonials" */}
            {/*   className="text-sm font-medium hover:text-primary" */}
            {/*   onClick={() => setIsMenuOpen(false)} */}
            {/* > */}
            {/*   Testimonials */}
            {/* </Link> */}
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-2">
              <Link href="https://tally.so/r/mVb1pg">
                <Button size="sm" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
