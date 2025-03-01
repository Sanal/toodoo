export default async function Page({
  params,
}: {
  params: Promise<{ categoryId: number }>;
}) {
  const categoryId = (await params).categoryId;

  return <div>Category {categoryId}</div>;
}
