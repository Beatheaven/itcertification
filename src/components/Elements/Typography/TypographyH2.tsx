interface myProps {
  children?: React.ReactNode;
  fontFamily?: string;
  fontSize?: string;
  fontColor?: string;
  fontWeight?: string;
  uppercase?: boolean;
  capitalize?: boolean;
  lowercase?: boolean;
}

export default function TypographyH2({ children, fontFamily, fontSize, fontColor, fontWeight, uppercase, capitalize, lowercase }: myProps) {
  return <h2 className={`text-[${fontSize}] font-${fontFamily} text-[${fontColor}] font-${fontWeight} my-3 ${uppercase ? "uppercase" : ""} ${capitalize ? "capitalize" : ""} ${lowercase ? "lowercase" : ""}`}>{children}</h2>;
}
