import { ChangeEvent } from "react";

export type AuthInputType = {
  name: string;
  value?: string | number;
  error?: string;
  type: string;
  touched?: boolean;
  handleChange: (e: string | ChangeEvent<any>) => void;
};

export type loginData = {
  email: string;
  password: string;
};
