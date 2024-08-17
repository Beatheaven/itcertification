interface myComponentProps {
  children?: React.ReactNode;
}

export default function UIUXLayouts({ children }: myComponentProps) {
  return <main className="bg-[#F4F4F4] h-full">{children}</main>;
}
