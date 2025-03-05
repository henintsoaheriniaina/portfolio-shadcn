import { Button } from "@/components/ui/button";
import { ArrowUp, Github, Mail, PhoneIcon } from "lucide-react";
import FooterForm from "./FooterForm";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t ">
      <div className="main-container px-4 md:px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">About Me</h3>
            <p className="text-sm text-muted-foreground">
              I’m passionate about building great web and mobile experiences.
              Every project is a new opportunity to learn, grow, and create
              something useful. If you want to connect, collaborate, or just
              chat about tech, feel free to reach out!
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-3">
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
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <FooterForm />
          </div>
        </div>
        <div className="mt-10 flex flex-col-reverse sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mt-4 sm:mt-0">
            © {new Date().getFullYear()} Rasolomampionona Henintsoa Heriniaina.
            All rights reserved.
          </p>
          <Button variant="outline" size="icon" onClick={handleScrollToTop}>
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}
