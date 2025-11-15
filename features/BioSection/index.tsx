const BioSection = () => (
  <div className="max-w-[1500px] flex flex-col-reverse gap-10 justify-center items-center md:flex-row">
    <div className="text-balance text-center">
      <div className="flex flex-col gap-2 md:gap-4">
        <h1 className="font-black text-3xl md:text-5xl lg:text-7xl">
          Hi, I&apos;m Tyler Hand
        </h1>
        <h2 className="font-bold text-fg-secondary leading-tight text-xl md:text-2xl lg:text-4xl">
          I am a software engineer with two years experience.
        </h2>
        <h3 className="text-fg-tertiary font-light leading-snug sm:leading-normal sm:text-lg lg:text-xl">
          With a specialization in full-stack web development using Next.js,
          React and Express and expertise in TypeScript, Tailwind CSS, modern
          database practices and CI/CD, I build and deploy applications from
          front to back.
        </h3>
      </div>
    </div>
    <div>
      <div className="size-[175px] md:size-[300px] rounded-[50%] bg-gray-400" />
    </div>
  </div>
);

export default BioSection;
