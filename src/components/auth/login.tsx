"use client";
import React, { useState } from "react";
import AuthInput from "../inputs/authInputs";
import { Form, Formik } from "formik";
import { AuthData } from "@/interfaces/auth";
import loginValidation from "@/lib/yup/loginValidation";
import Strings from "@/utils/constants/strings";

const LoginForm = () => {
  const [loginFormData, setLoginFormData] = useState<AuthData>({
    email: "",
    password: "",
  });
  return (
    <div className="text-center">
      <h3 className="text-xl mb-2">{Strings.general.sign_in}</h3>
      <p className="text-sm mb-4">{Strings.general.sign_desc}</p>
      <Formik
        initialValues={loginFormData}
        onSubmit={(values) => {
          console.log("login");
        }}
        validationSchema={loginValidation}
      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <AuthInput
                  error={errors.email}
                  name="Email"
                  type="email"
                  touched={touched.email}
                  value={values.email}
                  handleChange={handleChange("email")}
                />
              </div>
              <div className="flex flex-col gap-1">
                <AuthInput
                  error={errors.password}
                  name="Password"
                  type="password"
                  touched={touched.password}
                  value={values.password}
                  handleChange={handleChange("password")}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 font-montserrat tracking-[0.3rem] text-xs font-semibold leading-relaxe uppercase bg-primary mt-6"
            >
              {Strings.auth.login}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
