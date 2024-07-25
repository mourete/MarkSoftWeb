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

// Routes
import footerRoutes from "footer.routes";

// Images
import bata from "assets/images/bata.png";
import { useState } from "react";
import WhatsAppButton from "components/Whatsapp/Whatsapp";
import Navbar from "components/Navbar/Navbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

/* prettier-ignore */
function PageBata() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            Bata Quirúrgica.
        </MKTypography>
      </MKBox>
      <MKBox pt={4} px={1} mt={6}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Bata Quirúrgica."
                  height="500"
                  image={bata}
                  title="Bata Quirúrgica."
                />
                <CardContent>
                  <MKBox display="flex" justifyContent="center">
                    <MKButton variant="contained" color="info">
                      Ver imagen completa
                    </MKButton>
                  </MKBox>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKTypography variant="h4" component="h1" gutterBottom color="black">
              Bata Quirúrgica.
              </MKTypography>
              <MKTypography variant="h5" component="h1" gutterBottom color="black">
                1 bolsa de 10 piezas
              </MKTypography>
              {/* <MKTypography variant="body2" color="textSecondary" paragraph>
                Envío Express: Entrega el mismo día en la Ciudad de México y 1 día hábil para resto de la república.
              </MKTypography> */}
              <MKTypography variant="h5" gutterBottom>
                Descripción
              </MKTypography>
              <p>Elaborado en tela SMS no tejida, sellada en caliente y con 4 lazos para máxima comodidad, sin látex.</p>
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
                  <p>-Azul oscuro</p>
                  <p>-Talla M</p>
                  <p>-SMS</p>
                  <p>-Puño tejido: 8cm</p>
                  <p>-Cuello: gancho y bucle</p>
                  <p>-Cintura: 4 lazos</p>
                  <p>-Costura: Sellado en caliente ultrasónico</p>
                  <strong>Material y Peso</strong>
                  <p>-Suave.</p>
                  <p>-Transpirable.</p>
                  <p>-Resistente a la humedad.</p>
                  <p>-≈ 38 gsm (± 1 gsm).</p>
                </MKTypography>
              )}
              {value === 1 && (
                <MKTypography variant="body1">
                <strong>Ficha Técnica</strong>
                <p>Descarga el folleto con toda la información detallada:</p>
                <MKButton variant="contained" color="info" href="/fichaTecnica/FichaTecnica_Bata_quirurgica.pdf" download>
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

export default PageBata;
