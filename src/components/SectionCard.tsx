import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  subtitle: string;
  icon: string;
  children: ReactNode;
}

const SectionCard = ({ title, subtitle, icon, children }: SectionCardProps) => {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-xl">
          {icon}
        </span>
        <div>
          <h2 className="font-display text-xl font-bold text-foreground">{title}</h2>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
};

export default SectionCard;
