import Strings from "../../utils/constants/strings";
import * as Yup from "yup";

const loginValidation = Yup.object({
  email: Yup.string()
    .email(Strings.auth.invalidEmail)
    .required(Strings.auth.requiredEmail),
  password: Yup.string().required(Strings.auth.requiredPassword),
});

export default loginValidation;
