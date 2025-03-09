"use client";

import { X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { SEARCH_QUERY_KEY } from "@/constants";
import { createQueryString } from "@/lib/utils";

export default function SearchFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchValue = searchParams.get(SEARCH_QUERY_KEY);

  if (!searchValue) {
    return null;
  }

  const resetSearch = () => {
    const queryString = createQueryString({
      searchParams,
      name: SEARCH_QUERY_KEY,
      value: "",
    });
    router.push(`${pathname}?${queryString}`);
  };

  return (
    <Badge
      variant="secondary"
      className="cursor-pointer hover:bg-red-500/30"
      onClick={resetSearch}
    >
      Search: {searchValue}
      <X />
    </Badge>
  );
}
