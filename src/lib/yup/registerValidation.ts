import Strings from "../../utils/constants/strings";
import * as Yup from "yup";

const registerValidation = Yup.object({
  email: Yup.string()
    .email(Strings.auth.invalidEmail)
    .required(Strings.auth.requiredEmail),
  password: Yup.string()
    .min(8, Strings.auth.passwordLength)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d])/,
      Strings.auth.passwordMatch
    )
    .required(Strings.auth.requiredPassword),
});

export default registerValidation;
