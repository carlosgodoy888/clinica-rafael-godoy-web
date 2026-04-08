import { cn } from "@/lib/utils";
import type { ElementType, HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  as?: ElementType;
};

export function Container({ as: Tag = "div", className, children, ...props }: ContainerProps) {
  return (
    <Tag
      className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
