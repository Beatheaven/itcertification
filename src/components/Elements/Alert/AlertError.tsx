import { ReactNode } from "react";

interface alertErrorProps {
  children: ReactNode;
}

export default function AlertError({ children }: alertErrorProps) {
  return <div className="bg-[#ff536d] flex gap-3 text-white rounded-md w-full p-5">{children}</div>;
}
