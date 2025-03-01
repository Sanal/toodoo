import Modal from "@/components/modal";

export default async function Page({
  params,
}: {
  params: Promise<{ taskId: number }>;
}) {
  const taskId = (await params).taskId;

  return <Modal title={`Task ${taskId}`} />;
}
