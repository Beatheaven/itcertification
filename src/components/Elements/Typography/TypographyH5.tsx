interface myProps {
  children?: React.ReactNode;
  fontFamily?: string;
  fontSize?: string;
  fontColor?: string;
  fontWeight?: string;
  uppercase?: string;
  lowercase?: string;
  capitalize?: string;
}

export default function TypographyH5({ children, fontFamily, fontSize, fontColor, fontWeight, uppercase, lowercase, capitalize }: myProps) {
  return <h5 className={`text-[${fontSize}] font-${fontFamily} text-[${fontColor}] font-${fontWeight} my-3 ${uppercase ? "uppercase" : ""} ${capitalize ? "capitalize" : ""} ${lowercase ? "lowercase" : ""}`}>{children}</h5>;
}
