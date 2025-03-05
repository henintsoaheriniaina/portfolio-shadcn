import { AlignJustify, Github, Mail, PhoneIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
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
        <a href="#" className="border-b text-2xl font-bold p-4 w-full">
          Henintsoa Heriniaina
        </a>
        <div className="">
          <div className="grid gap-2 mt-6 p-4">
            <a href="#" className="mobile-link" onClick={() => setOpen(false)}>
              Home
            </a>
            <a
              href="#skills"
              className="mobile-link"
              onClick={() => setOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="mobile-link"
              onClick={() => setOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="mobile-link"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex space-x-3 p-4 mt-auto">
          <a
            href="https://github.com/henintsoaheriniaina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a href="mailto:rasolomampiononahenintsoaherin@gmail.com">
            <Button variant="ghost" size="icon" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Button>
          </a>
          <a href="tel:+261346091834">
            <Button variant="ghost" size="icon" aria-label="Appel">
              <PhoneIcon className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
