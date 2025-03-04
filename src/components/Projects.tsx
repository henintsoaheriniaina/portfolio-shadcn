import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
  techs: string[];
};

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and secure checkout.",
    image: "/placeholder.svg?height=300&width=400",
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    techs: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Task Management App",
    description:
      "A productivity app for managing tasks, projects, and team collaboration with real-time updates.",
    image: "/placeholder.svg?height=300&width=400",
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    techs: ["React Native", "Firebase", "Redux"],
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application providing real-time forecasts and interactive maps.",
    image: "/placeholder.svg?height=300&width=400",
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    techs: ["Vue.js", "OpenWeatherMap API", "Chart.js"],
  },
  {
    title: "Social Media Analytics",
    description:
      "A data visualization tool for analyzing social media engagement and audience insights.",
    image: "/placeholder.svg?height=300&width=400",
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    techs: ["React", "D3.js", "Node.js", "PostgreSQL"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="main-container px-4 md:px-6 py-16 md:py-24 lg:py-32 "
    >
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <Badge className="mb-4" variant="outline">
          My Work
        </Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Featured Projects
        </h2>
        <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          A showcase of my recent work and ongoing projects
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden border border-muted">
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Preview
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
