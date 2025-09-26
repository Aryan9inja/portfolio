import { siGithub, siX, siInstagram, siFacebook } from "simple-icons";

import type { ReactNode } from "react";

interface Social {
  name: string;
  href: string;
  icon: ReactNode;
  label: string;
}

const socials:Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/Aryan9inja",
    icon: ( <svg width={24} height={24} viewBox="0 0 24 24" className="fill-current text-foreground" aria-hidden="true"><path d={siGithub.path} /></svg> ),
    label: "GitHub profile"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/singharyanthakur/",
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" className="fill-current text-foreground" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.532-2.513-1.532 0-1.768 1.197-1.768 2.435v4.682h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 2.001 3.595 4.601v4.729z" />
      </svg>
    ),
    label: "LinkedIn profile"
  },
  {
    name: "Twitter",
    href: "https://x.com/Aryan_fullstack",
    icon: ( <svg width={24} height={24} viewBox="0 0 24 24" className="fill-current text-foreground" aria-hidden="true"><path d={siInstagram.path} /></svg> ),
    label: "Twitter profile"
  },{
    name:"Instagram",
    href:"https://www.instagram.com/ary._.an._/",
    icon:(<svg width={24} height={24} viewBox="0 0 24 24" className="fill-current text-foreground" aria-hidden="true"><path d={siX.path} /></svg>),
    label:"Instagram profile"
  },
  {
    name:"Facebook",
    href:"https://www.facebook.com/profile.php?id=100033277823781",
    icon:(<svg width={24} height={24} viewBox="0 0 24 24" className="fill-current text-foreground" aria-hidden="true"><path d={siFacebook.path} /></svg>),
    label:"Facebook profile"
  }
];

export default function SocialLinks() {
  return (
    <section className="bg-bg-muted/80 rounded-2xl shadow-lg p-8 text-center">
      <h1 className="text-2xl md:text-4xl font-bold text-highlight mb-6">
        Wanna know my social?
      </h1>
      <div className="flex justify-center gap-8 text-text/70" aria-label="Social links">
        {socials.map(({ name, href, icon, label }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-highlight transition-colors focus:outline-none"
            aria-label={label}
            title={label}
          >
            {icon}
          </a>
        ))}
      </div>
    </section>
  );
}
