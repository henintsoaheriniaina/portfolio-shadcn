import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

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
          Get In Touch
        </h2>
        <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Have a project in mind or just want to chat? I'm always open to new
          opportunities and collaborations.
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
          <form className="space-y-4">
            <div className="space-y-2">
              <Input id="name" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <Input id="email" placeholder="Your Email" type="email" />
            </div>
            <div className="space-y-2">
              <Textarea
                id="message"
                placeholder="Your Message"
                className="min-h-[100px]"
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="mt-12 flex justify-center space-x-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            size="icon"
            className="bg-background/80 backdrop-blur-sm"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="icon"
            className="bg-background/80 backdrop-blur-sm"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            size="icon"
            className="bg-background/80 backdrop-blur-sm"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Button>
        </a>
        <a href="mailto:hello@example.com">
          <Button
            variant="outline"
            size="icon"
            className="bg-background/80 backdrop-blur-sm"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Button>
        </a>
      </div>
    </section>
  );
}
