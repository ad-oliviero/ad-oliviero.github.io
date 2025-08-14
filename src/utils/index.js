import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function calculateAge() {
  const birthTimestamp = 1038006000; // Based on the original calculation
  const currentTimestamp = Math.floor(Date.now() / 1000);
  return Math.floor((currentTimestamp - birthTimestamp) / 31709800);
}