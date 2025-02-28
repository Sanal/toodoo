import { Ellipsis } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CategoriesList {
  list: Category[];
  parentId?: Category["parentId"];
}

export default function CategoriesList({
  list,
  parentId = null,
}: CategoriesList) {
  if (!list.length) return null;

  return (
    <ul className="flex flex-col">
      {list
        .filter((category) => category.parentId === parentId)
        .map(({ id, title }) => {
          const subcategories = list.filter(({ parentId }) => parentId === id);
          return (
            <li key={`category-${id}`} className="flex flex-col gap-1">
              <div className="flex gap-2 rounded-lg border">
                <div className="flex flex-grow gap-2">
                  <div className="flex h-9 w-9 items-center justify-center">
                    <Checkbox />
                  </div>
                  <div className="flex h-9 w-full items-center">
                    <span>{title}</span>
                  </div>
                </div>
                <Menu />
              </div>
              <div className="pl-2">
                <CategoriesList list={subcategories} parentId={id} />
              </div>
            </li>
          );
        })}
    </ul>
  );
}

function Menu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Add subcategory</DropdownMenuItem>
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
