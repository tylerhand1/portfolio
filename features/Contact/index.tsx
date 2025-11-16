import EmailIcon from '@/app/_components/UI/Icons/Email';
import GithubIcon from '@/app/_components/UI/Icons/GitHub';
import LinkedInIcon from '@/app/_components/UI/Icons/LinkedIn';

const Contact = () => (
  <ul className="w-full max-w-[400px] flex justify-evenly">
    <li>
      <a
        href="https://www.linkedin.com/in/tyler-hand1/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my LinkedIn"
      >
        <LinkedInIcon
          aria-hidden="true"
          focusable="false"
          className="size-12 md:size-15 lg:size-18 fill-fg-tertiary hover:fill-fg-primary"
        />
      </a>
    </li>
    <li>
      <a
        href="https://github.com/tylerhand1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my GitHub"
      >
        <GithubIcon
          aria-hidden="true"
          focusable="false"
          className="size-12 md:size-15 lg:size-18 fill-fg-tertiary hover:fill-fg-primary"
        />
      </a>
    </li>
    <li>
      <a
        href="mailto:tylerhand135@gmail.com?subject=Inquiry from Portfolio Site"
        aria-label="Contact me via Email"
      >
        <EmailIcon
          aria-hidden="true"
          focusable="false"
          className="size-12 md:size-15 lg:size-18 fill-fg-tertiary hover:fill-fg-primary"
        />
      </a>
    </li>
  </ul>
);

export default Contact;
