import { ReactNode } from "react";

interface myProps {
  children: ReactNode;
}
export default function NumberList({ children }: myProps) {
  return <ol className="list-decimal">{children}</ol>;
}
