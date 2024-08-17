import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface myComponentProps {
  children: ReactNode;
}

export default function ButtonLink({ children }: myComponentProps) {
  return (
    <Link to={"/register"} className=" text-[#412ec5] transition delay-150 ease-in-out hover:text-[#263453] duration-300">
      {children}
    </Link>
  );
}
