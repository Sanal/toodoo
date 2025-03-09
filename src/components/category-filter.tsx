"use client";

import { X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { CATEGORY_QUERY_KEY } from "@/constants";
import { createQueryString } from "@/lib/utils";

export default function CategoryFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentCategoryId = searchParams.get(CATEGORY_QUERY_KEY);

  if (!currentCategoryId) {
    return <Badge variant="secondary">All categories</Badge>;
  }

  const resetCategory = () => {
    const queryString = createQueryString({
      searchParams,
      name: CATEGORY_QUERY_KEY,
      value: "",
    });
    router.push(`${pathname}?${queryString}`);
  };

  return (
    <Badge
      variant="secondary"
      className="cursor-pointer hover:bg-red-500/30"
      onClick={resetCategory}
    >
      Category: {currentCategoryId}
      <X />
    </Badge>
  );
}
