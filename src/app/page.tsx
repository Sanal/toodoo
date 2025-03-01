import CategoriesList from "@/components/categories-list";
import Container from "@/components/container";
import ControlPanel from "@/components/control-panel";
import Header from "@/components/header";
import ProgressBar from "@/components/progress-bar";
import TodoList from "@/components/todo-llist";

export default function Home() {
  return (
    <div className="grid h-screen grid-cols-3 grid-rows-[auto_auto_auto_1fr] gap-4">
      <Header className="col-span-full" />
      <ProgressBar className="col-span-full" />
      <ControlPanel className="col-span-full" />
      <Container className="col-span-full grid grid-cols-3 gap-4">
        <CategoriesList />
        <TodoList className="col-[2/-1]" />
      </Container>
    </div>
  );
}
