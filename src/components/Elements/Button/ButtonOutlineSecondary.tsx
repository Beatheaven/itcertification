import { ReactNode } from "react";

interface myComponentProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  to?: string;
  type?: "submit" | "button" | "reset";
  upperCase?: boolean;
  width?: string;
  maxWidth?: string;
}

export default function ButtonOutlineSecondary({ children, className, type, onClick, upperCase, maxWidth }: myComponentProps) {
  return (
    <button
      type={type}
      className={`border-2 border-white p-3 font-bold text-white rounded-sm transition delay-150 ease-in-out duration-300 hover:bg-white hover:text-black w-full max-w-[${maxWidth}] ${className} ${upperCase ? "uppercase" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
