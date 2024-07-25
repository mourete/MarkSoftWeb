// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKInput from "components/MKInput";
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
import DefaultFooter from "examples/Footers/DefaultFooter";

// Images
import mascarilla from "assets/images/mascarilla_3_capas.jpg";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
import WhatsAppButton from "components/Whatsapp/Whatsapp";
import Navbar from "components/Navbar/Navbar";
import { useState } from "react";

/* prettier-ignore */
function PageMascarilla() {
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
          Mascarilla 3 Capas
        </MKTypography>
      </MKBox>
      <MKBox pt={4} px={1} mt={6}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Mascarilla 3 Capas"
                  height="500"
                  image={mascarilla}
                  title="Mascarilla 3 Capas"
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
                Mascarilla 3 Capas.
              </MKTypography>
              <MKTypography variant="h5" component="h1" gutterBottom color="black">
                Caja de 50 piezas
              </MKTypography>
              {/* <MKTypography variant="body2" color="textSecondary" paragraph>
                Envío Express: Entrega el mismo día en la Ciudad de México y 1 día hábil para resto de la república.
              </MKTypography> */}
              <MKTypography variant="h5" gutterBottom>
                Descripción
              </MKTypography>
              <p>Elaborado en 3 capas: 2 de tela no tejida y la del medio en polipropileno fundido, puente nasal para ajuste,
                    cordones elásticos para las orejas, modelo de 3 pliegues que permiten el ajuste en la cara del usuario 
                    con máxima comodidad.
                  </p>
              {/* <form>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <MKInput label="Nombre" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MKInput label="Correo" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MKInput label="Empresa" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MKInput label="Teléfono" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput label="Notas" fullWidth multiline rows={4} />
                  </Grid>
                  <Grid item xs={12}>
                    <MKButton variant="contained" color="info" fullWidth>
                      Solicitar cotización
                    </MKButton>
                  </Grid>
                </Grid>
              </form>
              <MKBox mt={4}>
                <MKTypography variant="h6">
                  <MKTypography variant="body1" component="span">
                    <MKBox component="span" mr={1}>
                      <PhoneIcon style={{ marginRight: "8px" }} />
                    </MKBox>
                    (+52) 81 8210 9701
                  </MKTypography>
                  <br />
                  <MKTypography variant="body1" component="span">
                    <MKBox component="span" mr={1}>
                      <EmailIcon style={{ marginRight: "8px" }} />
                    </MKBox>
                    contacto@marksoft.com.mx
                  </MKTypography>
                </MKTypography> */}
              {/* </MKBox> */}
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
                  <strong>Beneficios</strong>
                  <p>-El uso de la mascarilla minimiza  el riesgo de transmisión de virus desde la boca y la nariz del usuario, como medida complementaria con otras medidas preventivas.</p>
                  <p>-La mascarilla proporciona una eficiencia de filtración bacteriana al 95%.</p>
                  <p>-Las mascarillas permite una respiración regular y suave.</p>
                  <strong>Detalles del producto</strong>
                  <p>-Azul</p>
                  <p>-Cordones elásticos, cómodos y libre de látex</p>
                  <p>-Barra nasal integrada y ajustable</p>
                  <p>-Adecuado para personas que usan gafas</p>
                  <strong>Material y Peso</strong>
                  <p>-Capa interior ≈ 25 gsm (± 1 gsm): PP spunbond no tejido, blanco.</p>
                  <p>-Medio filtrante ≈ 25 gsm (± 1 gsm): PP no tejido soplado en fusión, blanco.</p>
                  <p>-Capa exterior ≈ 20 gsm (± 1 gsm): PP spunbond no tejido, azul.</p>
                  <strong>Eficiencia de filtración bacteriana (BFE) ≥ 98</strong>
                </MKTypography>
              )}
              {value === 1 && (
                <MKTypography variant="body1">
                  <strong>Ficha Técnica</strong>
                  <p>Descarga el folleto con toda la información detallada:</p>
                  <MKButton variant="contained" color="info" href="/fichaTecnica/FichaTecnica_Cubreboca_3_capas.pdf" download>
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

export default PageMascarilla;
