// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";
// import MKBox from "components/MKBox";

// Images
import logoCT from "assets/images/logo_MarkSoft.png";

const date = new Date().getFullYear();

export default {
  brand: {
    image: logoCT,
    route: "/",
    name: "MarkSoft",
  },
  socials: [
    // {
    //   icon: <FacebookIcon />,
    //   link: "https://www.facebook.com/CreativeTim/",
    // },
    // {
    //   icon: <InstagramIcon />,
    //   link: "https://www.instagram.com/CreativeTim/",
    // },
  ],
  menus: [
    {
      name: "",
      items: [
        { name: "Monterrey, Nuevo León" },
        { name: "(+52) 81 8210 9701" },
        { name: "contacto@marksoft.com.mx" },
        { name: "" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Copyright &copy; {date} MarkSoft{" "}
    </MKTypography>
  ),
};
