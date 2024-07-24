// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Productos from "layouts/sections/page-sections/page-headers/components/HeaderOne/Productos";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import logo from "assets/images/logo_MarkSoft.png";
import WhatsAppButton from "components/Whatsapp/Whatsapp";
import Footer from "components/Navbar/Footer";

/* prettier-ignore */
function PageHeaders() {
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
      <MKBox
        width="100%"
        height="100px"
        bgcolor="primary.main"
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={20}
        mt={9}
        sx={{
          backgroundColor: "#003366",
        }}
      >
        <MKTypography variant="h2" color="white">
          Productos
        </MKTypography>
      </MKBox>
      <Productos />
      <MKBox pt={4} px={1} mt={6}>
        <Footer content={footerRoutes} />
      </MKBox>
      <WhatsAppButton />
    </>
  );
}

export default PageHeaders;
