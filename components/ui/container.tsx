import type React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1200px] px-4 md:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
