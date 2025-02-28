import CategoriesList from "@/components/categories-list";
import Container from "@/components/container";
import ControlPanel from "@/components/control-panel";
import Footer from "@/components/footer";
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
        <CategoriesList list={categories} />
        <TodoList className="col-[2/-1]" />
      </Container>
      <Footer className="col-span-full" />
    </div>
  );
}

const categories = [
  { id: 1, title: "Category #1", parentId: null },
  { id: 2, title: "Category #2", parentId: null },
  { id: 3, title: "Category #3", parentId: null },
  { id: 4, title: "Category #4", parentId: 3 },
  { id: 5, title: "Category #5", parentId: 3 },
];
