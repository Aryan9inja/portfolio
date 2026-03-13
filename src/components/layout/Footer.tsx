import { siGithub, siX } from "simple-icons";

const LINKEDIN_PATH =
  "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.532-2.513-1.532 0-1.768 1.197-1.768 2.435v4.682h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 2.001 3.595 4.601v4.729z";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Aryan9inja",
    path: siGithub.path,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/singharyanthakur/",
    path: LINKEDIN_PATH,
  },
  {
    name: "Twitter",
    href: "https://x.com/Aryan_fullstack",
    path: siX.path,
  },
];

export default function Footer() {
  return (
    <footer className="py-8 text-center">
      <div className="flex justify-center gap-6 mb-4">
        {socials.map(({ name, href, path }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label={name}
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d={path} />
            </svg>
          </a>
        ))}
      </div>
      <p className="font-roboto text-xs text-text-muted">
        Built by Aryan Singh Thakur
      </p>
    </footer>
  );
}
