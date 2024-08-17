import { ButtonPrimary, ButtonInherit } from "../../Elements/Button/index";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

import InputForm from "../../Elements/Input/InputForm";

export default function RegisterForm() {
  const [register, setRegister] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const formik = useFormik({
    initialValues: register,
    validationSchema: Yup.object({
      fullName: Yup.string().required("Fullname is required").max(50, "Must be 50 characters or less"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
      confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (values) => {
      alert(`fullname: ${values.fullName}, email: ${values.email}, password: ${values.password}`);
    },
  });

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Register Success");
  };

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        formik.handleSubmit(e);
        handleRegister(e);
      }}
    >
      <div className="h-20">
        <InputForm
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Fullname"
          onChange={(e) => {
            formik.handleChange(e);
            setRegister({ ...register, fullName: e.target.value });
          }}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
          className={`${formik.touched.fullName && formik.errors.fullName ? "border-b-[3px] border-red-500" : "border-b-[2px] border-slate-900"}`}
        />
        {formik.touched.fullName && formik.errors.fullName ? <div className="text-red-500">{formik.errors.fullName}</div> : null}
      </div>

      <div className="h-20">
        <InputForm
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          autoComplete="email"
          onChange={(e) => {
            formik.handleChange(e);
            setRegister({ ...register, fullName: e.target.value });
          }}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={`${formik.touched.email && formik.errors.email ? "border-b-[3px] border-red-500" : "border-b-[2px] border-slate-900"}`}
        />
        {formik.touched.email && formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
      </div>

      <div className="h-20">
        <InputForm
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          autoComplete="new-password"
          onChange={(e) => {
            formik.handleChange(e);
            setRegister({ ...register, password: e.target.value });
          }}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className={`${formik.touched.password && formik.errors.password ? "border-b-[3px] border-red-500" : "border-b-[2px] border-slate-900"}`}
        />
        {formik.touched.password && formik.errors.password ? <div className="text-red-500">{formik.errors.password}</div> : null}
      </div>

      <div className="h-20">
        <InputForm
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          autoComplete="confirm-password"
          onChange={(e) => {
            formik.handleChange(e);
            setRegister({ ...register, confirmPassword: e.target.value });
          }}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          className={`${formik.touched.confirmPassword && formik.errors.confirmPassword ? "border-b-[3px] border-red-500" : "border-b-[2px] border-slate-900"}`}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="text-red-500">{formik.errors.confirmPassword}</div> : null}
      </div>

      <div className="space-y-3">
        <ButtonPrimary type="submit" className="">
          Sign Up
        </ButtonPrimary>
        <ButtonInherit type="button" width="100vw">
          <img src="/images/svg/google-asset.svg" alt="" />
          <span>Sign in with Google</span>
        </ButtonInherit>
        <ButtonInherit type="button" width="100vw">
          <img src="/images/svg/linkedln-asset.svg" alt="" />
          <span>Sign in with Linkedln</span>
        </ButtonInherit>
      </div>
    </form>
  );
}
