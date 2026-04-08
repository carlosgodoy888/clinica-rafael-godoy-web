import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  id?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeader({
  id,
  title,
  subtitle,
  badge,
  align = "center",
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border",
            dark
              ? "bg-white/10 text-teal-200 border-white/20"
              : "bg-teal-50 text-teal-600 border-teal-100"
          )}
          aria-hidden="true"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
          {badge}
          <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
        </div>
      )}
      <h2
        id={id}
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-bold leading-tight",
          dark ? "text-white" : "text-gray-900",
          align === "center" && "max-w-3xl mx-auto"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-base md:text-lg leading-relaxed",
            dark ? "text-teal-100" : "text-gray-500",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
