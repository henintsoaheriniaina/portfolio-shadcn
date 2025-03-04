import { Zap } from "lucide-react";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="  border-b sticky top-0  z-50 bg-background">
      <div className="main-container flex h-20 w-full shrink-0 items-center justify-between">
        {/* logo */}
        <a href="#" className="mr-6 hidden lg:flex">
          <Zap />
        </a>
        {/* mobile nav */}
        <MobileNav />
        {/* main nav */}
        <MainNav />
      </div>
    </header>
  );
};

export default Navbar;
