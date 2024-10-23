"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathName = usePathname();
  const links = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/resume", text: "Resume" },
    { href: "/projects", text: "Projects" },
    { href: "/contact", text: "Contact" }
  ];
  return (
    <nav className="flex  gap-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${
            link.href === pathName && "text-accent border-b-2 border-accent"
          } font-medium hover:text-accent uppercase transition-all`}
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
