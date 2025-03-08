"use client";

import { MonitorCog, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const iconStyle = "h-[1.2rem] w-[1.2rem] transition-all scale-100 rotate-0";
const hiddenStyle = "scale-0 rotate-90";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Skeleton className="h-9 w-9" />;
  }

  const toggleTheme = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("system");
        break;
      case "system":
        setTheme("light");
        break;
    }
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun className={cn(iconStyle, theme !== "light" && hiddenStyle)} />
      <Moon
        className={cn(iconStyle, theme !== "dark" && hiddenStyle, "absolute")}
      />
      <MonitorCog
        className={cn(iconStyle, theme !== "system" && hiddenStyle, "absolute")}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
