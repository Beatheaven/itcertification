import { ReactNode } from "react";

interface myComponentProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  to?: string;
  type?: "submit";
  upperCase?: boolean;
  width?: string;
  maxWidth?: string;
}

export default function ButtonPrimary({ children, className, type, onClick, upperCase, maxWidth }: myComponentProps) {
  return (
    <button
      type={type}
      className={` bg-[#A51525] border-2 border-[#A51525] p-3 font-bold text-white rounded-sm transition delay-150 ease-in-out duration-300 hover:bg-red-900 hover:border-red-900 ${
        upperCase ? "uppercase" : ""
      } w-full max-w-[${maxWidth}] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
