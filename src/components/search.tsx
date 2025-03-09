"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/input";
import { SEARCH_QUERY_KEY } from "@/constants";
import { createQueryString } from "@/lib/utils";

interface Search {
  className?: string;
}

export default function Search({ className }: Search) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const value = searchParams.get(SEARCH_QUERY_KEY) || "";

  const handleChange = (value: string) => {
    const queryString = createQueryString({
      searchParams,
      name: SEARCH_QUERY_KEY,
      value,
    });
    router.push(`${pathname}?${queryString}`);
  };

  return (
    <Input
      type="search"
      placeholder="Search"
      className={className}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
