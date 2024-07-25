// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "components/Navbar";

// Routes
import routes from "routes";

//images
import logo from "assets/images/logo_MarkSoft.png";

function NavbarDark() {
  return (
    <MKBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
      <DefaultNavbar
        brandLogo={logo}
        routes={routes}
        action={{
          type: "external",
          color: "info",
        }}
        transparent
        relative
        light
        center
      />
    </MKBox>
  );
}

export default NavbarDark;
