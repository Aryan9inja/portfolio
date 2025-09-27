import { Link } from "lucide-react";

export default function Contributions() {
  return (
    <section className="bg-bg-muted/80 rounded-2xl shadow-lg p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl md:text-4xl text-highlight mb-6 sm:mb-8 text-center">
        Open Source Contributions
      </h1>
      <div className="flex flex-col gap-2">
        <ol className="relative border-l-2 sm:border-l-4 border-highlight/60 pl-2 sm:pl-0">
          <li className="mb-8 sm:mb-10 ml-4 sm:ml-6">
            <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-highlight rounded-full -left-1.5 sm:-left-2.5 border-2 sm:border-4 border-bg-muted"></div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-highlight">
              <span className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2">
                <span>
                  Free-programming-books &#91; Hacktoberfest 2024 &#93;
                </span>
                <a
                  href="https://github.com/EbookFoundation/free-programming-books/pull/11449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 sm:mt-0 ml-0 sm:ml-2 text-accent hover:text-text/50 transition-colors p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label="View contribution on GitHub"
                >
                  <Link size={20} />
                </a>
              </span>
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-text mt-2">
              Contributed to documentation
            </p>
            <ul className="list-disc ml-4 sm:ml-5 mt-2 text-xs sm:text-sm md:text-lg text-text-muted">
              <li className="py-1">
                Added correct licensing to programming books
              </li>
              <li className="py-1">Fixed the readme file</li>
            </ul>
          </li>
          <li className="mb-8 sm:mb-10 ml-4 sm:ml-6">
            <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-highlight rounded-full -left-1.5 sm:-left-2.5 border-2 sm:border-4 border-bg-muted"></div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-highlight">
              <span className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2">
                <span>RocketChat &#47; fueslage</span>
                <a
                  href="https://github.com/RocketChat/fuselage/pull/1749"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 sm:mt-0 ml-0 sm:ml-2 text-accent hover:text-text/50 transition-colors p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label="View contribution on GitHub"
                >
                  <Link size={20} />
                </a>
              </span>
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-text mt-2">
              Fixed component rendering BUG
            </p>
            <ul className="list-disc ml-4 sm:ml-5 mt-2 text-xs sm:text-sm md:text-lg text-text-muted">
              <li className="py-1">
                Correctly render colors and layouts Box stories
              </li>
              <li className="py-1">Improved typesafety of the code</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
