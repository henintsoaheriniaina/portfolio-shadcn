import { Badge } from "@/components/ui/badge";
import projects from "@/constants/projetcs";
import ProjectCard from "./ProjectCard";

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
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
}
