const leftnav = "Blooms Your Days Since";

export default class Strings {
  static readonly general = {
    title: "Lefloriare",
    description: "Blooms Your Day",
    left_nav: "Blooms Your Days Since",
    year: "2024",
    right_nav: "Show us some love",
    home_st: "Perfect Picks",
    home_nd: "Brings Floral Delights",
    home_rd: "For Every Occasion",
    sale: "Sale",
    best_seller: "Best Seller",
    who: "Who is Lefloriare?",
    who_desc: `Lefloriare: The Rarest Florist, we're artisans passionate about crafting stories through flowers. Founded on love for botanicals, our team creates stunning arrangements that celebrate life's moments. From bespoke bouquets to event designs, Lefloriare transforms spaces and spirits, making every creation a testament to the enchanting power of nature.`,
    who_button: "Learn More About Us",
    join: "Join the Floriare VIP Member",
    sign_in: "Sign In as Floriare VIP Member",
    sign_desc:
      "Sign in your Floriare VIP Member Account to check your profile info including your VIP Tier and its benefits ",
    benefits:
      "Become a Floriare VIP and stay tune on new products in our store, the freshest floral and of course, enjoy our VIP benefits.",
    join_button: "Join",
    benefits_button: "Benefits",
    kind_words: "Kind Words",
    gallery: "Our Repertoire",
    news: "Latest News",
  };

  static readonly auth = {
    register: "Register",
    login: "Login",
    invalidEmail: "Email is invalid!",
    requiredEmail: "Email is required!",
    passwordLength: "Password must be at least 8 characters",
    passwordMatch:
      "Password must include uppercase, lowercase, number, and symbol!",
    requiredPassword: "Password is required!",
  };

  static readonly menu: MenuType = {
    home: "home",
    about: "about",
    product: "product",
    contact: "contact",
    rng: "Review & Gallery",
    membership: "membership",
  };
}
