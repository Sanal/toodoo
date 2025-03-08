import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CreateQueryString {
  searchParams?: URLSearchParams;
  name: string;
  value: string;
}

export const createQueryString = ({
  searchParams,
  name,
  value,
}: CreateQueryString) => {
  const params = new URLSearchParams(searchParams?.toString() || "");
  params.set(name, value);
  return params.toString();
};
