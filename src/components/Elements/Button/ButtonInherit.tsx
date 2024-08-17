import { ReactNode } from "react";

interface myComponentProps {
  children?: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  onClick?: () => void;
  to?: string;
  upperCase?: boolean;
  width?: string;
  maxWidth?: string;
}

export default function ButtonInherit({ children, type, className, upperCase, maxWidth }: myComponentProps) {
  return (
    <button
      type={type}
      className={`border-2 border-gray-300 bg-white py-3 flex flex-row justify-center items-center space-x-2 transition ease-in-out delay-150 duration-300 hover:bg-gray-300 ${className} w-full max-w-[${maxWidth}] ${
        upperCase ? "uppercase" : ""
      }`}
    >
      {children}
    </button>
  );
}
