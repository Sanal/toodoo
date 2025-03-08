"use client";

import {
  BriefcaseBusiness,
  Dumbbell,
  GraduationCap,
  MoreHorizontal,
  Plus,
  Star,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import Header from "@/components/header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
} from "@/components/ui/sidebar";
import { cn, createQueryString } from "@/lib/utils";

interface AppSidebar {
  side?: "left" | "right";
}

export default function AppSidebar({ side = "left" }: AppSidebar) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getQueryString = useCallback(
    (name: string, value: string) =>
      createQueryString({ searchParams, name, value }),
    [searchParams],
  );

  return (
    <Sidebar side={side} variant="inset">
      <SidebarHeader>
        <Header />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarGroupAction
            title="Add Project"
            onClick={() => router.push(`/category/new`, { scroll: false })}
          >
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {categoriesData.map(({ id, title, icon }) => {
                const isSelected =
                  searchParams.get("category") === id.toString();

                return (
                  <SidebarMenuItem key={`category-${id}`}>
                    <SidebarMenuButton
                      variant={isSelected ? "outline" : undefined}
                      className={cn(isSelected && "pointer-events-none border")}
                      onClick={() =>
                        router.push(
                          `${pathname}?${getQueryString("category", id.toString())}`,
                        )
                      }
                    >
                      <CategoryIcon name={icon} />
                      <span className="flex items-center gap-1">{title}</span>
                    </SidebarMenuButton>
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        asChild
                        className={cn(isSelected && "hover:bg-gray-300/60")}
                      >
                        <SidebarMenuAction>
                          <MoreHorizontal />
                        </SidebarMenuAction>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="start">
                        <DropdownMenuItem>
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem variant="destructive">
                          <span>Delete</span>
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
      <SidebarFooter />
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
