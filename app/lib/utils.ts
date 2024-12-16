import { clsx, type ClassValue } from "clsx"; // Correct import for clsx
import { twMerge } from "tailwind-merge"; // Correct import for twMerge

// Function to merge class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs)); // Ensure proper usage of clsx and twMerge
}