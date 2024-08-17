import { Link } from "react-router-dom";

export default function NavAuth() {
  return (
    <div className="flex w-full justify-between items-center">
      <Link to={"/"}>
        <img src="/images/webp/Logo.webp" alt="sagara" width={100} height={50} />
      </Link>
      <Link to={"#"} className="text-[#412ec5] transition delay-150 ease-in-out hover:text-[#263453] duration-300">
        Learn more
      </Link>
    </div>
  );
}
