import { Pacifico } from "next/font/google";

import { cn } from "@/lib/utils";

const logoFont = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

interface Header {
  className?: string;
}

export default function Header({ className }: Header) {
  return (
    <header className={cn("flex justify-center", className)}>
      <span className={cn("text-3xl transition-colors", logoFont.className)}>
        Toodoo
      </span>
    </header>
  );
}
