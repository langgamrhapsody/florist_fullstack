"use client";
import Strings from "@/utils/constants/strings";
import React, { FC, useState } from "react";
import { menu } from "./dropnav";
import { formatNumber } from "@/utils/helpers/helpers";
import SocialMediaComponents from "./socialmedia";
import { Form, Formik } from "formik";
import loginValidation from "@/lib/yup/loginValidation";
import { loginData } from "@/interfaces/auth";
import AuthInput from "../inputs/authInputs";

const Footer: FC<NavigationProps> = () => {
  const [loginFormData, setLoginFormData] = useState<loginData>({
    email: "",
    password: "",
  });
  return (
    <>
      <div className="w-full md:border-y border-black">
        <div className="lg:max-w-[1400px]  m-auto  ">
          <div
            className={` grid md:grid-cols-3 h-full divide-y md:divide-y-0  md:divide-x divide-black place-items-center transition-all ease-in-out duration-500 py-10 px-16 md:px-0`}
          >
            <div className="flex w-full h-full justify-end items-center  md:pr-12">
              <div className="w-10/12 md:w-full h-full bg-white py-8 mx-auto">
                <div className="flex-col gap-6 justify-center items-center w-full ml-auto md:w-8/12 ">
                  <p className=" text-wrap text-center   text-[10px] uppercase  tracking-widest leading-4 font-montserrat w-full pb-6">
                    Blooms your day <br></br> since 2024
                  </p>
                  {menu.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className={`group relative w-full h-max py-6 border-b border-black ${
                          item.id === 1 && "border-t"
                        }`}
                      >
                        <h2 className="group group-hover:font-medium group-hover:tracking-[0.1em] text-xl capitalize text-center transition-all ease-in-out duration-300">
                          {item.label}
                        </h2>
                        <div className="group group-hover:font-medium group-hover:tracking-[0.2em] absolute top-[10px] left-0 font-montserrat text-xs tracking-[0.1em] transition-all ease-in-out duration-300">
                          {formatNumber(item.id)}
                        </div>
                      </div>
                    );
                  })}
                  <div className=" flex flex-col w-full h-full justify-center items-center pt-8">
                    <p className=" text-wrap text-center text-[10px] uppercase  tracking-widest leading-4 font-montserrat">
                      Show us some love
                      <span className="flex gap-6 justify-center mt-4 opacity-70">
                        <SocialMediaComponents
                          style={"w-[10px] h-[10px] text-black "}
                        />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" relative flex flex-col w-full h-full justify-between sm:px-10 lg:px-14 gap-6 md:gap-0 md:py-0 py-8">
              <h1 className=" font-semibold text-3xl cursor-pointer tracking-widest text-center ">
                {Strings.general.title}
              </h1>
              <div className="text-center">
                <h3 className="text-xl mb-2">{Strings.general.join}</h3>
                <p className="text-sm mb-4">{Strings.general.benefits}</p>
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
                          {touched.email && errors?.email && (
                            <p className="text-red-500 mt-0.5">
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
                            <p className="text-red-500 mt-0.5">
                              {errors.password}
                            </p>
                          )}
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full px-6 py-4 font-montserrat tracking-[0.3rem] text-xs font-semibold leading-relaxe uppercase bg-primary mt-6"
                      >
                        Login
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
              <div>
                <p className="text-center text-xs font-montserrat">
                  Terms & Condition / Privacy Policy
                </p>
              </div>
            </div>
            <div className=" w-full h-full justify-start items-center md:pl-12 ">
              <div className="w-10/12 md:w-full h-full bg-white py-8 mx-auto">
                <div className="flex-col gap-6 justify-center items-center w-full mr-auto md:w-8/12 ">
                  <p className=" text-wrap text-center   text-[10px] uppercase  tracking-widest leading-4 font-montserrat w-full pb-6">
                    Blooms your day <br></br> since 2024
                  </p>
                  {menu.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className={`group relative w-full h-max py-6 border-b border-black ${
                          item.id === 1 && "border-t"
                        }`}
                      >
                        <h2 className="group group-hover:font-medium group-hover:tracking-[0.1em] text-xl capitalize text-center transition-all ease-in-out duration-300">
                          {item.label}
                        </h2>
                        <div className="group group-hover:font-medium group-hover:tracking-[0.2em] absolute top-[10px] left-0 font-montserrat text-xs tracking-[0.1em] transition-all ease-in-out duration-300">
                          {formatNumber(item.id)}
                        </div>
                      </div>
                    );
                  })}
                  <div className=" flex flex-col w-full h-full justify-center items-center pt-8">
                    <p className=" text-wrap text-center text-[10px] uppercase  tracking-widest leading-4 font-montserrat">
                      Show us some love
                      <span className="flex gap-6 justify-center mt-4 opacity-70">
                        <SocialMediaComponents
                          style={"w-[10px] h-[10px] text-black "}
                        />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-6  flex flex-col justify-center items-center text-center font-montserrat tracking-widest text-xs bg-primary  ">
        <p>
          Copyright © 2024
          <span className=""> Lefloriare</span> | All Rights Reserved
        </p>
        <p>
          Powered By <span className="">ADC Media</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
