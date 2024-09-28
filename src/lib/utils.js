import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};
