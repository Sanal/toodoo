import { cookies } from "next/headers";

import AppSidebar from "@/components/app-sidebar";
import Container from "@/components/container";
import Search from "@/components/search";
import ThemeSwitcher from "@/components/theme-switcher";
import TodoList from "@/components/todo-llist";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default async function Home() {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset>
        <main className="flex w-full flex-col gap-6 pb-16">
          <div className="flex justify-between gap-4 p-[0.375rem]">
            <SidebarTrigger />
            <Search className="max-w-[400px]" />
            <ThemeSwitcher />
          </div>
          <Container>
            <TodoList className="px-2" />
          </Container>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
