import React, { ReactNode } from "react";

interface myComponentProps {
  children?: ReactNode;
  className?: string;
}

export default function ButtonOutlinePrimary({ children, className }: myComponentProps) {
  return <button className={`uppercase border-2 border-[#A51535] p-2 text-[#A51535] w-full max-w-[10rem] rounded-sm transition ease-in-out delay-150 duration-300 hover:bg-[#A51535] hover:text-white ${className}`}>{children}</button>;
}
