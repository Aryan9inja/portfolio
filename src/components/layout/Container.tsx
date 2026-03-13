import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-4xl px-6 md:px-12 lg:px-24", className)}>
      {children}
    </div>
  );
}
