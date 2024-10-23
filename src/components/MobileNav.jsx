"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { CiMenuBurger } from "react-icons/ci";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const MobileNav = () => {
  const pathName = usePathname();
  const links = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/resume", text: "Resume" },
    { href: "/projects", text: "Projects" },
    { href: "/contact", text: "Contact" }
  ];

  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuBurger className="text-[27px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Visually Hidden Dialog Title for accessibility */}
        <VisuallyHidden>
          <DialogTitle>Navigation Menu</DialogTitle>
        </VisuallyHidden>

        {/* Dialog Description */}
        <VisuallyHidden>
          <DialogDescription>
            This is the navigation menu for the mobile version of the site.
          </DialogDescription>
        </VisuallyHidden>

        {/* Logo */}
        <div className="py-10">
          <Link href={"/"}>
            <h1 className="text-3xl font-semibold">
              Likhon<span className="text-accent">.me</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col gap-8 items-center">
          {links.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className={`${
                  link.href === pathName &&
                  "text-accent border-b-2 border-accent"
                } font-medium hover:text-accent uppercase transition-all`}
              >
                {link.text}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
