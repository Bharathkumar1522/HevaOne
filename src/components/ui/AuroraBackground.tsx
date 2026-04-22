import type { HTMLAttributes, ReactNode } from "react";

type AuroraBackgroundProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  showRadialGradient?: boolean;
};

export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div className={`aurora-background ${className ?? ""}`.trim()} {...props}>
      <div className="aurora-background__layer" aria-hidden="true">
        <div
          className={`aurora-background__aurora ${
            showRadialGradient ? "aurora-background__aurora--masked" : ""
          }`.trim()}
        />
      </div>
      {children}
    </div>
  );
}
