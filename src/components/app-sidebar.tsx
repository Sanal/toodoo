"use client";

import {
  BriefcaseBusiness,
  Dumbbell,
  Edit,
  GraduationCap,
  MoreHorizontal,
  Plus,
  Star,
  Trash,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import GithubIcon from "@/components/github-icon";
import Header from "@/components/header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { CATEGORY_QUERY_KEY } from "@/constants";
import { cn, createQueryString } from "@/lib/utils";

export default function AppSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { setOpenMobile } = useSidebar();

  const getQueryString = useCallback(
    (name: string, value: string) =>
      createQueryString({ searchParams, name, value }),
    [searchParams],
  );

  const handleCategoryClick = (categoryId: number) => {
    const newPath = `${pathname}?${getQueryString(CATEGORY_QUERY_KEY, categoryId.toString())}`;
    router.push(newPath);
    setOpenMobile(false);
  };

  const handleCategoryFormCall = (categoryId?: number) => {
    const _categoryId = categoryId || "new";
    router.push(`/category/${_categoryId}?${searchParams}`, { scroll: false });
  };

  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <Header />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarGroupAction
            title="Add Category"
            onClick={() => handleCategoryFormCall()}
          >
            <Plus /> <span className="sr-only">Add Category</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {categoriesData.map(({ id, title, icon }) => {
                const isSelected =
                  searchParams.get(CATEGORY_QUERY_KEY) === id.toString();

                return (
                  <SidebarMenuItem key={`category-${id}`}>
                    <SidebarMenuButton
                      variant={isSelected ? "outline" : undefined}
                      className={cn(isSelected && "pointer-events-none border")}
                      onClick={() => handleCategoryClick(id)}
                    >
                      <CategoryIcon name={icon} />
                      <span className="flex items-center gap-1">{title}</span>
                    </SidebarMenuButton>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <SidebarMenuAction>
                          <MoreHorizontal />
                        </SidebarMenuAction>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="start">
                        <DropdownMenuItem
                          onClick={() => handleCategoryFormCall(id)}
                        >
                          <Edit /> <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive">
                          <Trash /> <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <a
          href="https://github.com/sanal/toodoo"
          className="flex items-center gap-2 text-xl hover:underline"
        >
          <GithubIcon /> <span className="text-sm">Source Code</span>
        </a>
      </SidebarFooter>
    </Sidebar>
  );
}

type CategoryIconName = "work" | "sport" | "study" | "star";

const categoriesData: { id: number; title: string; icon: CategoryIconName }[] =
  [
    { id: 1, title: "Work", icon: "work" },
    { id: 2, title: "Sport", icon: "sport" },
    { id: 3, title: "Studying", icon: "study" },
    { id: 4, title: "Personal", icon: "star" },
  ];

const CategoryIcon = ({ name }: { name: CategoryIconName }) => {
  switch (name) {
    case "study":
      return <GraduationCap />;
    case "sport":
      return <Dumbbell />;
    case "star":
      <Star />;
    case "work":
      return <BriefcaseBusiness />;
  }
};
