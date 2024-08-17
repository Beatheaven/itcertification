interface myProps {
  children?: React.ReactNode;
}

export default function FrontEndDescLayouts({ children }: myProps) {
  return <main className="bg-[#F4F4F4] h-full">{children}</main>;
}
