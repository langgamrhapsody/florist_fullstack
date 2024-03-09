export default class Routes {
  static readonly home = "/";

  static readonly user = {
    main: "/user",
  };

  static readonly admin = {
    main: "/admin",
  };

  static readonly auth = {
    login: "/auth/login",
    register: "/auth/login",
    forgot: "/auth/forgot-password",
    loginAdmin: "/auth/admin-login",
  };
}
