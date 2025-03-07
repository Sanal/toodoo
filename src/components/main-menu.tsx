import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";

export default function MainMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="px-4">
          <span className="flex flex-nowrap items-center gap-2">
            <Switch id="show-done" />
            <label htmlFor="show-done" className="text-sm">
              Show&nbsp;done
            </label>
          </span>
        </div>
      </SheetContent>
    </Sheet>
  );
}
