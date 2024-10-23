import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}

        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Likhon<span className="text-accent">.me</span>
          </h1>
        </Link>

        {/* Desktop Nav and Hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}

        <div className="flex xl:hidden flex-col">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
