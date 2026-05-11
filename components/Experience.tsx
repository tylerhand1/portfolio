import { portfolioData } from "@/data";
import { Badge } from "./ui/badge";

const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 flex flex-col gap-10 scroll-mt-16 pb-24"
    >
      <div className="flex flex-col gap-3 text-center sm:text-left border-b border-border pb-6">
        <h2 className="scroll-m-20 text-primary text-2xl md:text-4xl font-semibold tracking-tight">
          Professional History
        </h2>
      </div>

      <div className="flex flex-col gap-12 border-l border-border pl-6 ml-2">
        {portfolioData.experience.map((job) => (
          <div
            key={job.company}
            className="relative cursor-pointer flex flex-col gap-3 group"
          >
            <div className="absolute -left-7 top-2 w-2 h-2 rounded-full bg-primary border border-background shadow-sm" />

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                {job.role}{" "}
                <span className="text-muted-foreground font-normal text-base">
                  at {job.company}
                </span>
              </h3>
              <span className="text-xs group-hover:text-primary font-mono text-primary font-bold tracking-wider uppercase sm:normal-case sm:text-muted-foreground">
                {job.period}
              </span>
            </div>

            {job.summary && (
              <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl">
                {job.summary}
              </p>
            )}

            {job.stack && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {job.stack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs font-mono font-medium"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
