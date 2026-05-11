import { portfolioData } from "@/data";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "./ui/card";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 flex flex-col gap-10 scroll-mt-16 pb-24"
    >
      <div className="flex flex-col gap-3 text-center sm:text-left border-b border-border pb-6">
        <h2 className="scroll-m-20 text-primary text-2xl md:text-4xl font-semibold tracking-tight">
          Recent Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.projects.map((project) => (
          <Card key={project.id} className="flex flex-col h-full">
            <CardHeader className="flex flex-col gap-2">
              <div className="flex justify-between items-center gap-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                  {project.category}
                </span>
                <Badge
                  variant={
                    project.status === "Beta Phase" ? "secondary" : "default"
                  }
                  className="text-[11px] font-semibold opacity-90 hidden md:block"
                >
                  {project.status}
                </Badge>
              </div>
              <CardTitle className="text-xl font-bold tracking-tight">
                {project.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col flex-1">
              <CardDescription className="text-sm leading-relaxed mb-4">
                {project.description}
              </CardDescription>

              <div className="flex-1 flex-col justify-end hidden md:flex">
                <div className="flex flex-wrap justify-end gap-x-2 gap-y-1.5 pt-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-[10px] font-mono"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>

            <CardFooter className="pt-4">
              {project.demoUrl ? (
                <Button className="bg-primary text-primary-foreground font-bold px-6 ml-auto">
                  View Demo
                </Button>
              ) : (
                <div className="h-8" />
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
