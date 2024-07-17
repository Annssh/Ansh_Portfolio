"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "experience",
    path: "/experience",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries
            className="text-[32px] text-[#f79500]"
            onClick={() => setIsOpen(true)}
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <div className="mt-32 mb-20 text-center text-2xl">
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Ansh<span className="text-[#f79500]">.</span>
              </h1>
            </Link>
          </div>

          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-[#f79500] border-b-2 border-[#f79500]"
                } text-xl capitalize hover:text-[#f79500] transition-all`}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
