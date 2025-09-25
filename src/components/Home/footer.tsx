import Link from "next/link";
import { siGithub } from "simple-icons";

export function Footer() {
  return (
    <footer className="bg-bg-muted/80 border-t border-border rounded-xl shadow-inner mt-10 p-6 flex flex-col items-center gap-6">
      <h2 className="text-3xl md:text-4xl text-highlight font-bold text-center">
        Want to know more about me? <span className="inline-block">😁</span>
      </h2>
      <p className="text-xl md:text-2xl text-center">
        Check out the about page{" "}
        <Link href="/about">
          <span className="cursor-pointer text-accent-active hover:text-accent-hover underline underline-offset-4">
            About
          </span>
        </Link>
      </p>
      <div className="flex flex-row gap-8 justify-center items-center mt-2">
        <a
          href="https://www.linkedin.com/in/singharyanthakur/"
          target="_blank"
          rel="noopener"
          className="flex items-center gap-2 text-accent-active hover:text-accent-hover text-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="inline-block"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.532-2.513-1.532 0-1.768 1.197-1.768 2.435v4.682h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 2.001 3.595 4.601v4.729z" />
          </svg>
          LinkedIn
        </a>
        <a
          href="https://github.com/Aryan9inja"
          target="_blank"
          rel="noopener"
          className="flex items-center gap-2 text-accent-active hover:text-accent-hover text-xl"
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="fill-current text-foreground"
          >
            <path d={siGithub.path} />
          </svg>
          Github
        </a>
      </div>
    </footer>
  );
}
