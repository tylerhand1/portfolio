import Contact from '../Contact';

const BioSection = () => (
  <div className="text-balance text-center flex flex-col gap-4 md:gap-6 justify-center items-center">
    <h1 className="font-black text-5xl md:text-5xl lg:text-7xl">
      Hi, I&apos;m <span className="text-highlight">Tyler Hand</span>
    </h1>
    <h2 className="font-bold text-fg-secondary leading-snug text-2xl md:text-2xl lg:text-4xl">
      A software engineer with two years experience.
    </h2>
    <Contact />
    <h3 className="text-fg-tertiary italic font-light text-sm/snug sm:text-lg lg:text-xl max-w-[1200px]">
      With a specialization in full-stack web development using Next.js, React
      and Express and expertise in TypeScript, Tailwind CSS, modern database
      practices and CI/CD, I build and deploy applications from front to back.
    </h3>
  </div>
);

export default BioSection;
