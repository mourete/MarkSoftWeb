// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import Navbar from "components/Navbar/Navbar";
import WhatsAppButton from "components/Whatsapp/Whatsapp";
// Images
import bgImage from "assets/images/guante.png";
/* prettier-ignore */
function Presentation() {
  return (
    <>
      <Navbar />
      <MKBox
        minHeight="90vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "2000px",
          height: "800px",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      />
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
      <WhatsAppButton />
    </>
  );
}

export default Presentation;
