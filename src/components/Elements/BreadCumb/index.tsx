import { ReactNode } from "react";

interface myComponentProps {
  children: ReactNode;
}

export default function BreadCumb({ children }: myComponentProps) {
  return (
    <div className="border-2 border-[#BAF1C3] bg-[#BAF1C3] px-2 flex justify-center rounded-xl text-[#087718] font-bold">
      <span className="">{children}</span>
    </div>
  );
}
