interface myProps {
  children?: React.ReactNode;
  fontFamily?: string;
  fontSize?: string;
  fontColor?: string;
  fontWeight?: string;
  textPosition?: string;
}

export default function Paragraph({ children, fontFamily, fontSize, fontColor, fontWeight, textPosition }: myProps) {
  return <span className={`text-${fontSize} font-${fontFamily} text-${fontColor} font-${fontWeight} text-${textPosition} my-3 `}>{children}</span>;
}
