interface SubMenu {
  name: string;
  path: string;
}

interface MenuItem {
  name: string;
  path: string;
  subMenu?: SubMenu[];
}

export const nav_menu: MenuItem[] = [
  { name: "Home", path: "/" },
  { name: "Browse Products", path: "/shops" },
  { name: "Blog", path: "/blog" },
  { name: "Feedback", path: "/feedback" },
  {
    name: "Others",
    path: "/",
    subMenu: [
      { name: "Contact Us", path: "/contact_us" },
      { name: "FAQ", path: "/faq" },
      { name: "Terms and Conditions", path: "/faq" },
      { name: "About US", path: "/about_us" },
    ],
  },
];
