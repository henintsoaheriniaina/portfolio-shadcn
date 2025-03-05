import { Badge } from "@/components/ui/badge";
import { Project } from "@/constants/projetcs";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Props = {
  project: Project;
};
const ProjectCard = ({ project }: Props) => {
  return (
    <Card className="overflow-hidden border border-muted pt-0">
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
      <div className="mt-auto">
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
          {project.liveLink && (
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
          )}
        </CardFooter>
      </div>
    </Card>
  );
};
export default ProjectCard;
