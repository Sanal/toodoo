"use client";

import { Ellipsis } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const list = [
  { id: 1, title: "Category #1", parentId: null },
  { id: 2, title: "Category #2", parentId: null },
  { id: 3, title: "Category #3", parentId: null },
  { id: 4, title: "Category #4", parentId: 3 },
  { id: 5, title: "Category #5", parentId: 3 },
  { id: 6, title: "Category #5", parentId: 5 },
  { id: 7, title: "Category #5", parentId: 5 },
];

interface CategoriesList {
  parentId?: Category["parentId"];
}

export default function CategoriesList({ parentId = null }: CategoriesList) {
  if (!list.length) return null;

  return (
    <ul className="flex w-full flex-col gap-1">
      {list
        .filter((category) => category.parentId === parentId)
        .map(({ id, title }) => {
          const subcategories = list.filter(({ parentId }) => parentId === id);
          return (
            <li key={`category-${id}`} className="flex flex-col gap-1">
              <div className="bg-background flex gap-2 rounded-lg border">
                <div className="flex flex-grow gap-2">
                  <div className="flex h-9 w-9 items-center justify-center">
                    <Checkbox />
                  </div>
                  <div className="flex h-9 w-full items-center">
                    <span>{title}</span>
                  </div>
                </div>
                <Menu categoryId={id} />
              </div>
              {Boolean(subcategories.length) && (
                <CategoriesList parentId={id} />
              )}
            </li>
          );
        })}
    </ul>
  );
}

function Menu({ categoryId }: { categoryId: number }) {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() =>
            router.push(`/category/${categoryId}`, { scroll: false })
          }
        >
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>Add subcategory</DropdownMenuItem>
        <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
