export default function Internships() {
  return (
    <section className="bg-bg-muted/80 rounded-2xl shadow-lg p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl md:text-4xl text-highlight mb-6 sm:mb-8 text-center">
        Internships
      </h1>
      <div className="flex flex-col gap-2">
        <ol className="relative border-l-2 sm:border-l-4 border-highlight/60 pl-2 sm:pl-0">
          <li className="mb-8 sm:mb-10 ml-4 sm:ml-6">
            <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-highlight rounded-full -left-1.5 sm:-left-2.5 border-2 sm:border-4 border-bg-muted"></div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-highlight">
              <span className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2">
                <span>
                  Full Stack Developer Intern @
                  <a
                    href="https://www.linkedin.com/company/svaraai/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Svara AI
                  </a>
                </span>
                <span className="text-sm sm:text-base text-text-muted">
                  October 2025 - Present
                </span>
              </span>
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-text mt-2">
                Working on building the front-end and back-end of the website
            </p>
            <ul className="list-disc ml-4 sm:ml-5 mt-2 text-xs sm:text-sm md:text-lg text-text-muted">
                <li className="py-1">
                    Building everything from scratch
                </li>
                <li className="py-1">
                    Collaborating with a team of developers and ML engineers
                </li>
              <li className="py-1">
                Devloping application using Next.js and Nest.js
              </li>
              <li className="py-1">
                Integrating AI models into the application
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
