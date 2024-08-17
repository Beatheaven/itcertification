interface myProps {
  children?: React.ReactNode;
  fontFamily?: string;
  fontSize?: string;
  fontColor?: string;
  fontWeight?: string;
}

export default function Subtitle({ children, fontFamily, fontSize, fontColor, fontWeight }: myProps) {
  return <span className={`text-[${fontSize}] font-${fontFamily} text-[${fontColor}] font-${fontWeight} my-3`}>{children}</span>;
}
