import AppSidebar from "@/components/app-sidebar";
import Container from "@/components/container";
import MainMenu from "@/components/main-menu";
import ProgressBar from "@/components/progress-bar";
import TodoList from "@/components/todo-llist";
import { Input } from "@/components/ui/input";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex w-full flex-col gap-6 pb-16">
        <Container className="flex justify-between gap-4 px-4 py-2">
          <SidebarTrigger />
          <Input type="search" placeholder="Search" className="max-w-[400px]" />
          <MainMenu />
        </Container>
        <Container className="px-4">
          <ProgressBar />
        </Container>
        <Container>
          <TodoList className="px-4" />
        </Container>
      </main>
    </SidebarProvider>
  );
}
