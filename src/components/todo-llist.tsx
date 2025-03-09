"use client";

import { EllipsisVertical, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import CurrentCategoryBadge from "@/components/current-category-badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface TodoList {
  className?: string;
}

export default function TodoList({ className }: TodoList) {
  const searchParams = useSearchParams();

  return (
    <div className={cn("grid w-full gap-4", className)}>
      <div>
        <CurrentCategoryBadge />
      </div>
      <ul className={"flex flex-col gap-1"}>
        {todos.map(({ id, title, completed }) => (
          <li key={`todo-${id}`} className="flex items-center gap-1">
            <div className="text-border cursor-grab active:cursor-grabbing">
              <EllipsisVertical />
            </div>
            <div className="hover:bg-accent/50 flex flex-grow gap-2 rounded-[0.75rem] p-1">
              <div className="flex h-9 w-9 items-center justify-center">
                <Checkbox
                  id={`todo-${id}`}
                  checked={completed}
                  className="bg-background"
                />
              </div>
              <div className="flex h-9 flex-grow items-center">
                <span
                  className={cn(
                    "flex-grow",
                    completed && "text-current/50 line-through",
                  )}
                >
                  {title}
                </span>
              </div>
              <Link href={`/task/${id}?${searchParams}`} scroll={false}>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal />
                </Button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const todos = [
  { id: 1, title: "Buy eggs", completed: false },
  { id: 2, title: "Sell milk", completed: true },
  { id: 3, title: "Sell milk", completed: false },
  { id: 4, title: "Sell milk", completed: false },
  { id: 5, title: "Sell milk", completed: false },
  { id: 6, title: "Sell milk", completed: false },
  { id: 7, title: "Sell milk", completed: true },
  { id: 8, title: "Sell milk", completed: true },
  { id: 9, title: "Sell milk", completed: true },
];
