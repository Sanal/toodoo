import { Edit } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface TodoList {
  className?: string;
}

export default function TodoList({ className }: TodoList) {
  return (
    <ul className={cn("flex flex-col gap-1", className)}>
      {todos.map(({ id, title, completed }) => (
        <li key={`todo-${id}`}>
          <div
            className={cn(
              "flex gap-2 rounded-lg border",
              completed && "opacity-50",
            )}
          >
            <div className="flex h-9 w-9 items-center justify-center">
              <Checkbox id={`todo-${id}`} checked={completed} />
            </div>
            <div className="flex h-9 flex-grow items-center">
              <span className={cn("flex-grow", completed && "line-through")}>
                {title}
              </span>
            </div>
            <Link href={{ pathname: `/task/${id}` }} scroll={false}>
              <Button variant="ghost" size="icon">
                <Edit />
              </Button>
            </Link>
          </div>
        </li>
      ))}
    </ul>
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
