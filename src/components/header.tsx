import { Pacifico } from "next/font/google";
import Link from "next/link";

import Container from "@/components/container";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
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
    <header className={className}>
      <Container className="flex min-h-16 items-center justify-between">
        <Link href="/">
          <span
            className={cn(
              "text-3xl transition-colors hover:text-green-700",
              logoFont.className,
            )}
          >
            Toodoo
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <span className="flex flex-nowrap items-center gap-2">
            <Switch id="show-done" checked />
            <label htmlFor="show-done">Show&nbsp;done</label>
          </span>
          <Input type="search" placeholder="Search" className="w-[240px]" />
        </div>
      </Container>
    </header>
  );
}
