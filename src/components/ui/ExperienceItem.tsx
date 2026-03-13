interface ExperienceItemProps {
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  bullets: string[];
}

export default function ExperienceItem({
  title,
  company,
  companyUrl,
  period,
  bullets,
}: ExperienceItemProps) {
  return (
    <div className="group">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
        <h3 className="text-lg md:text-xl font-semibold text-text">
          {title}{" "}
          <span className="text-accent">
            @{" "}
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {company}
            </a>
          </span>
        </h3>
        <span className="font-roboto text-sm text-text-muted">{period}</span>
      </div>
      <ul className="mt-2 space-y-2">
        {bullets.map((bullet, idx) => (
          <li
            key={idx}
            className="flex gap-2 text-text-muted text-sm md:text-base"
          >
            <span className="text-accent mt-1 flex-shrink-0">&#9656;</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
