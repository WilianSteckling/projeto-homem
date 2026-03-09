import * as React from "react";
import { cn } from "@/lib/utils";

type AnimatedGroupProps = {
  className?: string;
  children: React.ReactNode;
};

export function AnimatedGroup({ className, children }: AnimatedGroupProps) {
  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-3",
        "*:animate-[fade-up_.7s_ease_forwards] *:opacity-0",
        "[&>*:nth-child(2)]:[animation-delay:.1s] [&>*:nth-child(3)]:[animation-delay:.2s]",
        className,
      )}
    >
      {children}
    </div>
  );
}
