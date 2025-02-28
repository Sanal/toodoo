import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface Container extends PropsWithChildren {
  className?: string;
}

export default function Container({ children, className }: Container) {
  return <div className={cn("mx-auto w-full px-4", className)}>{children}</div>;
}
