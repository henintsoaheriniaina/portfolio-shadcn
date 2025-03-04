import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import skills from "@/constants/skills";
import { ExternalLink } from "lucide-react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="main-container px-4 md:px-6 py-16 md:py-24 lg:py-32 "
    >
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <Badge className="mb-4" variant="outline">
          My Tech Stack
        </Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Technologies I Use
        </h2>
        <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Passionate about building modern web and mobile applications using the
          latest technologies.
        </p>
      </div>

      <div className="px-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {skills.map((skill, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <Card className="overflow-hidden border border-muted">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <skill.icon className="size-16" />
                    <h3 className="font-semibold mb-2">{skill.name}</h3>
                    <a
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="mt-2">
                        Learn More <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          Continuously expanding my skillset with cutting-edge technologies
        </p>
      </div>
    </section>
  );
}
