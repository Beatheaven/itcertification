import { ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";
import NavAuth from "../Fragments/NavAuth/NavAuth";
import { Footer } from "../Fragments/Home";

interface myComponentProps {
  children: ReactNode;
}

export default function LayoutsRegister({ children }: myComponentProps) {
  useEffect(() => {
    document.title = "Register | IT Certification";
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="p-5 flex flex-col h-screen w-screen ">
          <NavAuth />
          <div className="space-y-10 flex flex-col mt-10 justify-center m-28">
            <div className="">
              <h2 className="text-[#A51535] font-bold text-[40px]">Sign Up</h2>
              <p>
                Have an Account?{" "}
                <Link to={"/login"} className=" text-[#412ec5] transition delay-150 ease-in-out hover:text-[#263453] duration-300">
                  Sign in
                </Link>
              </p>
            </div>
            {children}
          </div>
        </div>

        <div className="hidden lg:flex">
          <img src="/images/png/auth-asset.png" alt="login" className="w-[120vw] h-[135vh] object-cover object-center" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
