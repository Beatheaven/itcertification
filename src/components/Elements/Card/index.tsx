import { ReactNode } from "react";

interface myComponentProps {
  children: ReactNode;
  className: string;
}

export default function Card({ children, className }: myComponentProps) {
  return <div className={`bg-white rounded-lg ${className}`}>{children}</div>;
}
