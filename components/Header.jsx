import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className="py-3 md:py-5 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Ansh<span className="text-[#f79500]">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}

        <div className="hidden md:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="md:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;
