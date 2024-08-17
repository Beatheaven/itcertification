import { useEffect, ReactNode } from "react";

interface myComponentProps {
  children: ReactNode;
  title: string;
}

export default function SEO({ title, children }: myComponentProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return {
    title,
    children,
  };
}
