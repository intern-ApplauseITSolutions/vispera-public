import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function Container({ children, className }) {
  return (
    <div className={twMerge("container-custom", className)}>
      {children}
    </div>
  );
}
