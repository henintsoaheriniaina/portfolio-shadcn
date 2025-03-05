import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Mail, PhoneIcon } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="main-container px-4 md:px-6 py-16 md:py-24 lg:py-32 "
    >
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <Badge className="mb-4" variant="outline">
          Let's Connect
        </Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
          Contact me
        </h2>
        <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Feel free to reach out if you have any questions or just want to
          connect! I'm always open to discussing new opportunities, ideas, or
          any feedback you may have.
        </p>
      </div>

      <Card className="max-w-md mx-auto bg-background/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Send a Message</CardTitle>
          <CardDescription>
            Fill out the form and I'll get back to you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>

      <div className="mt-12 flex justify-center space-x-4">
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
    </section>
  );
}
