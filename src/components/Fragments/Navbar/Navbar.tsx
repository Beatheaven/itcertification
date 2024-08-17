import navLink1 from "../Navbar/navLink1.json";
import navLink2 from "../Navbar/navLink2.json";
import Humberger from "../../Elements/Humberger";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="mb-20 lg:mb-40">
      <div className="fixed w-full top-0">
        <header className="flex fixed lg:relative w-full top-0 bg-white justify-between items-center p-5 z-10">
          <Link to={"/"}>
            <img src="/images/webp/Logo.webp" alt="logo" width={100} height={50} />
          </Link>
          <nav className="">
            <ul className="hidden lg:flex space-x-5">
              {navLink1.map((item, i) => {
                return (
                  <li key={i}>
                    <a href={item.link} className="font-barlow font-semibold text-gray-400 transition ease-in-out delay-150 duration-300 hover:text-gray-800">
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="relative lg:hidden">
              <Humberger type="button" onClick={toggle} />
            </div>
          </nav>
        </header>
        <header className="bg-[#FAFAFA]  p-5 hidden lg:flex items-center justify-between">
          <div className="flex space-x-10 font-roboto-slab">
            <div className=" text-[#CC1A41] font-semibold text-[20px]">
              <span>IT Certification</span>
            </div>
            <ul className="flex items-center  space-x-5">
              {navLink2.map((item, i) => {
                return (
                  <li key={i}>
                    <NavLink
                      to={item.link}
                      className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#CC1A41]" : "text-[#212121] transition delay-150 ease-in-out duration-300 hover:text-[#CC1A41] active:text-[#941732]")}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="font-bold flex flex-row space-x-5 w-full max-w-xs">
            <button className="uppercase border-2 border-[#A51535] p-2 text-[#A51535] w-full max-w-[10rem] rounded-sm transition ease-in-out delay-150 duration-300 hover:bg-[#A51535] hover:text-white">Redeem Code</button>
            <Link to={"/login"}>
              <button className="uppercase border-2 border-[#A51535] p-2 text-white bg-[#A51535] w-screen max-w-[10rem] rounded-sm transition delay-150 ease-in-out duration-300 hover:bg-red-900 hover:border-red-900">Sign In</button>
            </Link>
          </div>
        </header>

        {/* for me, please fix this humberger, terutama di background saat close, hero gabisa dioperasikan  */}
        <div className={`transition delay-150 ease-in-out duration-300  h-screen ${isOpen ? "bg-[#303030] max-h-screen bg-opacity-90 flex flex-col" : "bg-[#303030] bg-opacity-0 max-h-0"}`}>
          <ul className={`bg-[#303030] flex-col space-y-5 transition delay-150 ease-in-out duration-1000 ${isOpen ? "translate-y-20 bg-[#303030] opacity-100" : "-translate-y-[40rem]"}`}>
            {navLink1.map((item, i) => {
              return (
                <li key={i} className="border-b border-gray-300 px-5 py-5">
                  <a href={item.link} className="font-barlow font-semibold  text-white transition ease-in-out delay-150 duration-300 hover:text-gray-800">
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
