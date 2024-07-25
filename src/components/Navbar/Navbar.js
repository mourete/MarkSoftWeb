// src/components/Navbar/Navbar.js
import React from "react";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import logo from "assets/images/logo_MarkSoft.png";
import routes from "routes";
import DefaultNavbar from "components/Navbar";

/* prettier-ignore */
const Navbar = () => {
  return (
    <>
      <MKBox
        width="100%"
        height="40px"
        bgcolor="primary.main"
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={2}
        sx={{
          backgroundColor: "#003366",
        }}
      >
        <MKTypography variant="body2" color="white">
          Contacto: (+52) 81 8210 9701 | contacto@marksoft.com.mx
        </MKTypography>
      </MKBox>
      <DefaultNavbar
        brandLogo={logo}
        routes={routes}
        action={{
          type: "external",
          color: "info",
        }}
        sticky
      />
    </>
  );
};

export default Navbar;
