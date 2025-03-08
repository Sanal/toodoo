import AppSidebar from "@/components/app-sidebar";
import Container from "@/components/container";
import ThemeSwitcher from "@/components/theme-switcher";
import TodoList from "@/components/todo-llist";
import { Input } from "@/components/ui/input";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="flex w-full flex-col gap-6 pb-16">
          <div className="flex justify-between gap-4 px-4 py-2 md:p-[0.375rem]">
            <SidebarTrigger />
            <Input
              type="search"
              placeholder="Search"
              className="max-w-[400px]"
            />
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
