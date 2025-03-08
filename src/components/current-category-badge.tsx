"use client";

import { X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Badge } from "@/components/ui/badge";

export default function CurrentCategoryBadge() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentCategoryId = searchParams.get("category");

  if (!currentCategoryId) {
    return <Badge variant="secondary">All</Badge>;
  }

  const resetCategory = () => {
    if (currentCategoryId) {
      router.push(pathname);
    }
  };

  return (
    <Badge
      variant="secondary"
      className="cursor-pointer hover:bg-red-500/30"
      onClick={resetCategory}
    >
      {searchParams.get("category")}
      <X />
    </Badge>
  );
}
