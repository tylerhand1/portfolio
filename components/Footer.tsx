import { portfolioData } from "@/data";

const Footer = () => {
  const { connect } = portfolioData;

  return (
    <footer className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-border/60">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <span className="text-sm font-bold text-foreground">Tyler Hand</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-mono font-bold tracking-tight">
          <a
            href={`mailto:${connect.email}`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Email
          </a>
          <span className="text-muted-foreground/40 hidden sm:inline">•</span>
          <a
            href={connect.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-muted-foreground/40 hidden sm:inline">•</span>
          <a
            href={connect.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <span className="text-muted-foreground/40 hidden sm:inline">•</span>
          <a
            href={connect.resume}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Resume (PDF)
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
