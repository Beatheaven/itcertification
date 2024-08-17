interface myProps {
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
}

export default function Humberger({ onClick }: myProps) {
  return (
    <div className="space-y-1 p-2 border-2 border-black rounded-md cursor-pointer" onClick={onClick}>
      <div className="border-2 border-black w-5"></div>
      <div className="border-2 border-black w-5"></div>
      <div className="border-2 border-black w-5"></div>
      {""}
    </div>
  );
}
