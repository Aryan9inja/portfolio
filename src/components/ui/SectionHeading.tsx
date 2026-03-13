interface SectionHeadingProps {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-semibold text-text mb-10">
      <span className="font-roboto text-accent text-base md:text-lg">{number}.</span>
      {title}
      <span className="ml-4 h-px flex-1 bg-border" />
    </h2>
  );
}
