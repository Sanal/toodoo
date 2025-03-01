import Modal from "@/components/modal";

export default async function Page({
  params,
}: {
  params: Promise<{ categoryId: number }>;
}) {
  const categoryId = (await params).categoryId;

  return <Modal title={`Category ${categoryId}`} />;
}
