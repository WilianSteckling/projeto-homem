import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition",
        variant === "primary" &&
          "bg-foreground text-background hover:opacity-90",
        variant === "outline" &&
          "border border-foreground/20 bg-transparent hover:bg-foreground/5",
        className,
      )}
      {...props}
    />
  );
}
