"use client";
import { AuthData } from "@/interfaces/auth";
import registerValidation from "@/lib/yup/registerValidation";
import Strings from "@/utils/constants/strings";
import { Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import AuthInput from "../inputs/authInputs";

const RegisterForm = () => {
  const [registerFormData, setRegisterFormData] = useState<AuthData>({
    email: "",
    password: "",
  });

  const handleSubmit = async (
    values: AuthData,
    { setSubmitting, setErrors }: FormikHelpers<AuthData>
  ) => {
    try {
      // Simulate an API call
      // throw new Error('Simulated submission error'); // Uncomment to simulate an error

      console.log("Form data:", values);
      // Proceed with form submission logic here (e.g., API call)
      alert("Form submitted successfully!");

      setSubmitting(false); // Set submitting to false upon success
    } catch (error) {
      if (error instanceof Error) {
        console.error("Submission error:", error.message);
        setErrors({ email: "This is a simulated submission error." });
      }
      setSubmitting(false); // Ensure submitting is set to false on error as well
    }
  };
  return (
    <div className="text-center">
      <h3 className="text-xl mb-2">{Strings.general.join}</h3>
      <p className="text-sm mb-4">{Strings.general.benefits}</p>
      <Formik
        initialValues={registerFormData}
        onSubmit={handleSubmit}
        validationSchema={registerValidation}
      >
        {({ errors, touched, values, handleChange, isSubmitting }) => (
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
                {touched.email && errors?.email && (
                  <p className="text-left text-red-500 text-[12px] mt-0.5">
                    {errors.email}
                  </p>
                )}
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
                {touched.password && errors?.password && (
                  <p className="text-left text-red-500 text-[12px] mt-0.5">
                    {errors.password}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 font-montserrat tracking-[0.3rem] text-xs font-semibold leading-relaxe uppercase bg-primary mt-6"
            >
              {Strings.auth.register}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
