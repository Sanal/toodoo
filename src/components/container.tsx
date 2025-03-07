import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface Container extends PropsWithChildren {
  className?: string;
}

export default function Container({ children, className }: Container) {
  return (
    <div className={cn("container mx-auto w-full", className)}>{children}</div>
  );
}
