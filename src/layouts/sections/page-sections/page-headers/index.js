//Productos
// Sections components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// PageHeaders page components
import Navbar from "components/Navbar/Navbar";
import WhatsAppButton from "components/Whatsapp/Whatsapp";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import Productos from "layouts/sections/page-sections/page-headers/components/HeaderOne";
/* prettier-ignore */
function PageHeaders() {
  return (
    <>
    <Navbar />
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
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
      <WhatsAppButton />
    </>
  );
}

export default PageHeaders;
