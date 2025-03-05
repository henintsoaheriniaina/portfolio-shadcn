import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Mail, PhoneIcon } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="main-container px-4 md:px-6 py-16 md:py-24 lg:py-32 "
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start gap-2">
            <Badge className="inline-flex mb-2" variant="outline">
              Available for Internship
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className="text-primary"> Henintsoa Heriniaina. </span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Computer Science student at U-Magis Saint Michel, building apps
              with Express.js, Laravel, React & React Native.
            </p>
          </div>
          <div className="flex flex-col justify-center lg:justify-start gap-2 min-[400px]:flex-row ">
            <Button asChild size="lg">
              <a href="#contact">Get in touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">View my work</a>
            </Button>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-4 mt-4">
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
        <div className="flex items-center justify-center">
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-background shadow-xl">
            <img
              src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
              alt="Alex Johnson"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
