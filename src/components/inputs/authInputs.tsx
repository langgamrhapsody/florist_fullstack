import React, { ChangeEvent, FC, useState } from "react";
import { Field } from "formik";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { AuthInputType } from "@/interfaces/auth";

const AuthInput: FC<AuthInputType> = ({
  error,
  name,
  value,
  type,
  touched,
  handleChange,
}) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="relative flex flex-col w-full font-montserrat tracking-[0.1rem]">
      <label
        className={`w-full px-2 leading-[1.6]  text-left transition-all duration-200 ease-out font-semibold   motion-reduce:transition-none uppercase text-[10px] ${
          touched && error ? "text-red-500" : "text-black"
        }`}
      >
        {name}
      </label>
      <input
        value={value}
        onChange={handleChange}
        id={name}
        name={name}
        type={type === "password" ? (show ? "text" : "password") : type}
        className={`peer block min-h-[auto] w-full   border-b border-solid px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none dark:placeholder:text-neutral-200 placeholder:opacity-0 ${
          touched && error ? "border-red-500" : "border-black"
        }`}
      />
      {type === "password" && (
        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? (
            <EyeIcon className="w-4 h-4 text-black" />
          ) : (
            <EyeSlashIcon className="w-4 h-4 text-black" />
          )}
        </button>
      )}
    </div>
  );
};

export default AuthInput;
