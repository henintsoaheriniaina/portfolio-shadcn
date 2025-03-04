import { AlignJustify, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden cursor-pointer"
        >
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="p-4">
          <a href="#" className="flex items-center gap-2 ">
            <Zap />
            <p className="text-xl font-semibold">Henintsoa Heriniaina</p>
          </a>
          <div className="grid gap-2 mt-6">
            <a href="#" className="mobile-link">
              Home
            </a>
            <a href="#" className="mobile-link">
              About
            </a>
            <a href="#" className="mobile-link">
              Services
            </a>
            <a href="#" className="mobile-link">
              Contact
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
