export const COMPANY_INFO = {
  name: "Monir Group Limited",
  tagline: "Bring out the value",
  description: "Innovate & Transform your business with Monir Group Limited",
  address: {
    line1: "Singapore Housing Road # 6/A, Plot # 2",
    line2: "Sector # 17, Block # J, Uttara Centre",
    city: "Dhaka",
    postalCode: "1230",
    country: "Bangladesh",
  },
  contact: {
    email: "info@monirgroup.com",
    phone: "+880 1234 567890",
  },
  social: {
    facebook: "#",
    linkedin: "#",
    twitter: "#",
  },
} as const

export const THEME_COLORS = {
  primary: "#17375f",
  secondary: "#e94362",
  primaryLight: "#f9e8eb",
} as const

export const ROUTES = {
  home: "/",
  about: "/about",
  products: "/products",
  services: "/services",
  career: "/career",
  contact: "/contact",
  team: "/team",
  gallery: "/gallery",
} as const
