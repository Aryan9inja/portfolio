export default function Startups() {
  return (
    <section className="bg-bg-muted/80 rounded-2xl shadow-lg p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl md:text-4xl text-highlight mb-6 sm:mb-8 text-center">
        Startups
      </h1>
      <div className="flex flex-col gap-2">
        <ol className="relative border-l-2 sm:border-l-4 border-highlight/60 pl-2 sm:pl-0">
          <li className="mb-8 sm:mb-10 ml-4 sm:ml-6">
            <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-highlight rounded-full -left-1.5 sm:-left-2.5 border-2 sm:border-4 border-bg-muted"></div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-highlight">
              <span className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2">
                <span>
                  Started @
                  <a
                    href="https://www.linkedin.com/company/svaraai/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fugal-Labs
                  </a>
                </span>
                <span className="text-sm sm:text-base text-text-muted">
                  December 2025 - Present
                </span>
              </span>
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-text mt-2">
                Working on bootstarting a startup from scrath
            </p>
            <ul className="list-disc ml-4 sm:ml-5 mt-2 text-xs sm:text-sm md:text-lg text-text-muted">
                <li className="py-1">
                    Building everything from scratch
                </li>
                <li className="py-1">
                    Leading a team of interns
                </li>
              <li className="py-1">
                Devloping application using Next.js and Express backend
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
