type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type Category = {
  id: number;
  title: string;
  parentId: number | null;
};
