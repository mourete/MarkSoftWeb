// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import Presentation from "layouts/pages/presentation";

// Sections
//import PageHeaders from "layouts/sections/page-sections/page-headers";

const routes = [
  {
    name: "Inicio",
    icon: <Icon>home</Icon>,
    route: "/pages/landing-pages/presentation",
    component: <Presentation />,
  },
  {
    name: "Nosotros",
    icon: <Icon>person</Icon>,
    route: "/pages/landing-pages/author",
    component: <Author />,
  },
  {
    name: "Tienda",
    icon: <Icon>store</Icon>,
    route: "https://marksoftmx.wixsite.com/marksoftmx",
    isExternal: true,
  },
  {
    name: "Contacto",
    icon: <Icon>contact_page</Icon>,
    route: "/pages/landing-pages/contact-us",
    component: <ContactUs />,
  },
];

export default routes;
