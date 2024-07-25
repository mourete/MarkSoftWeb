// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// Routes
import footerRoutes from "footer.routes";
import DefaultFooter from "examples/Footers/DefaultFooter";
// Images
import kn95 from "assets/images/mascarilla_kn95.png";
import { useState } from "react";
import WhatsAppButton from "components/Whatsapp/Whatsapp";
import Navbar from "components/Navbar/Navbar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

/* prettier-ignore */
function PageKn95() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
       <Navbar />
       <MKBox
        width="100%"
        height="70px"
        bgcolor="primary.main"
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={20}
        mt={12}
        sx={{
          backgroundColor: "#003366",
        }}
      >
        <MKTypography variant="h3" color="white">
            Cubrebocas KN95.
        </MKTypography>
      </MKBox>
      <MKBox pt={4} px={1} mt={6}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Cubrebocas KN95."
                  height="500"
                  image={kn95}
                  title="Cubrebocas KN95."
                  sx={{
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                />
                <CardContent>
                  <MKBox display="flex" justifyContent="center">
                    <MKButton variant="contained" color="info" onClick={handleOpen}>
                      Ver imagen completa
                    </MKButton>
                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
                      <Box sx={style}>
                        <img src={kn95} alt="Cubrebocas KN95" style={{ width: "100%" }} />
                      </Box>
                    </Modal>
                  </MKBox>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKTypography variant="h4" component="h1" gutterBottom color="black">
                Cubrebocas KN95.
              </MKTypography>
              <MKTypography variant="h5" component="h1" gutterBottom color="black">
                50 Piezas
              </MKTypography>
              {/* <MKTypography variant="body2" color="textSecondary" paragraph>
                Envío Express: Entrega el mismo día en la Ciudad de México y 1 día hábil para resto de la república.
              </MKTypography> */}
              <MKTypography variant="h5" gutterBottom>
                Descripción
              </MKTypography>
              <p>Elaborado en 5 capas tela no tejida, fundida por soplado con filtro  de absorción de humedad, puente nasal
                  recubierto para ajuste, cordones elásticos para las orejas, modelo plegable que mantienen la mascarilla en
                  la cara del usuario con máxima comodidad.</p>
            </Grid>
          </Grid>
          <MKBox mt={4}>
            <Tabs value={value} onChange={handleChange} aria-label="description tabs">
              <Tab label="Descripción" />
              <Tab label="Ficha Técnica" />
            </Tabs>
            <Box sx={{ p: 3 }}>
              {value === 0 && (
                <MKTypography variant="body1">
                  <strong>Detalles del producto</strong>
                  <p>-Blanco</p>
                  <p>-Cordones elásticos, cómodos y libre de látex</p>
                  <p>-Barra nasal integrada y ajustable</p>
                  <p>-Adecuado para personas que usan gafas</p>
                  <strong>Material y Peso</strong>
                  <p>-Capa interior ≈ 25 gsm (± 1 gsm): PP spunbond no tejido, blanco.</p>
                  <p>-Filtro de segunda capa ≈ 25 gsm (± 1 gsm): PP meltblown no tejido, blanco.</p>
                  <p>-Filtro de tercera capa ≈ 25 gsm (± 1 gsm): PP meltblown no tejido, blanco.</p>
                  <p>-Cuarta capa ≈ 40 gsm (± 1 gsm): algodón de aire caliente.</p>
                  <p>-Capa exterior ≈ 45 gsm (± 1 gsm): PP spunbond no tejido, blanco.</p>
                  <strong>Eficiencia de filtración bacteriana (BFE) ≥ 95%</strong>
                </MKTypography>
              )}
              {value === 1 && (
                <MKTypography variant="body1">
                <strong>Ficha Técnica</strong>
                <p>Descarga el folleto con toda la información detallada:</p>
                <MKButton variant="contained" color="info" href="/fichaTecnica/FichaTecnica_Cubreboca _KN95.pdf" download>
                  Descargar Folleto
                </MKButton>
              </MKTypography>
              )}
            </Box>
          </MKBox>
        </Container>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
        <WhatsAppButton />
      </MKBox>
    </>
  );
}

export default PageKn95;
