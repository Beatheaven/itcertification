import { ButtonPrimary, ButtonInherit } from "../../Elements/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import { AlertError } from "../../Elements/Alert";
import { setCookie } from "typescript-cookie";
import InputForm from "../../Elements/Input/InputForm";
import * as Yup from "yup";

interface LoginState {
  email: string;
  password: string;
}

export default function LoginForm() {
  const correctEmail: string = "admin@example.com";
  const correctPassword: string = "admin";
  const navigate = useNavigate();
  const token: string = "fsdjfiosdhfsihf32476373sdf";
  const [error, setError] = useState("");
  const [login, setLogin] = useState<LoginState>({
    email: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ((login.email === null && login.password === null) || (login.email === "" && login.password === "")) {
      setError("Insert your account");
    } else if ((login.email !== correctEmail && login.password !== correctPassword) || (login.email === correctEmail && login.password !== correctPassword) || (login.email !== correctEmail && login.password === correctPassword)) {
      setError("Email or password is incorrect");
    } else {
      const userLogin: string = JSON.stringify(login);
      setCookie("@token", token, { expires: 1, secure: true });
      JSON.stringify(setCookie("@userLogin", userLogin, { expires: 1, secure: true }));
      navigate("/dashboard");
    }
  };

  const formik = useFormik({
    initialValues: login,
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: () => {
      handleLogin;
    },
  });

  return (
    <>
      {error && (
        <AlertError>
          {" "}
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </AlertError>
      )}
      <form
        className="space-y-5"
        onSubmit={(e) => {
          formik.handleSubmit(e);
          handleLogin(e);
        }}
      >
        <div className="h-16">
          <InputForm
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="email"
            onChange={(e) => {
              formik.handleChange(e);
              setLogin({ ...login, email: e.target.value });
            }}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`${formik.touched.email && formik.errors.email ? "border-b-[3px] border-red-500" : "border-b-[2px] border-slate-900"}`}
          />
          {formik.touched.email && formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
        </div>

        <div className="h-16">
          <InputForm
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            autoComplete="current-password"
            onChange={(e) => {
              formik.handleChange(e);
              setLogin({ ...login, password: e.target.value });
            }}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`${formik.touched.password && formik.errors.password ? "border-b-[3px] border-red-800" : "border-b-[2px] border-slate-900"}`}
          />
          {formik.touched.password && formik.errors.password ? <div className="text-red-500">{formik.errors.password}</div> : null}
        </div>

        <div>
          <Link to={"#"} className="text-[#412ec5] transition delay-150 ease-in-out hover:text-[#263453] duration-300">
            Forgot Password?
          </Link>
        </div>
        <div className="space-y-3 ">
          <ButtonPrimary type="submit">Sign in</ButtonPrimary>
          <ButtonInherit type="button" width="100%">
            <img src="/images/svg/google-asset.svg" alt="" />
            <span>Sign in with Google</span>
          </ButtonInherit>
          <ButtonInherit type="button" width="100%">
            <img src="/images/svg/linkedln-asset.svg" alt="" />
            <span>Sign in with Linkedln</span>
          </ButtonInherit>
        </div>
      </form>
    </>
  );
}
