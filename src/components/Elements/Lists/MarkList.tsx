import { ReactNode } from "react";

interface myProps {
  children: ReactNode;
}

export default function MarkList({ children }: myProps) {
  return <ul>{children}</ul>;
}
