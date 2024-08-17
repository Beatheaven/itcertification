import { ReactNode, useEffect } from "react";

interface myComponentProps {
  children: ReactNode;
}

export default function LayoutHome({ children }: myComponentProps) {
  useEffect(() => {
    document.title = "Home | IT Certification";
  }, []);
  return <main>{children}</main>;
}
