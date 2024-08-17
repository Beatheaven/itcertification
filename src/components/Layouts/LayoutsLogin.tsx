import { ReactNode, useEffect } from "react";
import NavAuth from "../Fragments/NavAuth/NavAuth";
import ButtonLink from "../Elements/Button/ButtonLink";
import { Footer } from "../Fragments/Home";

interface myComponentProps {
  children: ReactNode;
}

export default function LayoutsLogin({ children }: myComponentProps) {
  useEffect(() => {
    document.title = "Login | IT Certification";
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="p-5 flex flex-col h-screen w-screen ">
          <NavAuth />
          <div className="space-y-10 flex flex-col mt-24 justify-center m-28">
            <div>
              <h2 className="text-[#A51535] font-bold text-[40px]">Sign In</h2>
              <p>
                New to Sagara? <ButtonLink>Sign Up</ButtonLink>
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
