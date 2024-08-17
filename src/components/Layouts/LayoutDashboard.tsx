import React from "react";

interface myProps {
  children: React.ReactNode;
}
export default function LayoutDashboard({ children }: myProps) {
  return <main>{children}</main>;
}
