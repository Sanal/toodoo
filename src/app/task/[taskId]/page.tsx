export default async function Page({
  params,
}: {
  params: Promise<{ taskId: number }>;
}) {
  const taskId = (await params).taskId;

  return <div>Task {taskId}</div>;
}
