import React, { useState } from "react";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DefaultFooter from "examples/Footers/DefaultFooter";
import WhatsAppButton from "components/Whatsapp/Whatsapp";
import Navbar from "components/Navbar/Navbar";
import footerRoutes from "footer.routes";
import mascarilla from "assets/images/mascarilla_3_capas.jpg";

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
const PageMascarilla = () => {
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
                        <img src={mascarilla} alt="Mascarilla 3 Capas" style={{ width: "100%" }} />
                      </Box>
                    </Modal>
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
              <MKTypography variant="h5" gutterBottom>
                Descripción
              </MKTypography>
              <p>
                Elaborado en 3 capas: 2 de tela no tejida y la del medio en polipropileno fundido,
                puente nasal para ajuste, cordones elásticos para las orejas, modelo de 3 pliegues que
                permiten el ajuste en la cara del usuario con máxima comodidad.
              </p>
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
                  <p>
                    -El uso de la mascarilla minimiza el riesgo de transmisión de virus desde la boca y
                    la nariz del usuario, como medida complementaria con otras medidas preventivas.
                  </p>
                  <p>-La mascarilla proporciona una eficiencia de filtración bacteriana al 95%.</p>
                  <p>-Las mascarillas permite una respiración regular y suave.</p>
                  <strong>Detalles del producto</strong>
                  <p>-Azul</p>
                  <p>-Cordones elásticos, cómodos y libre de látex</p>
                  <p>-Barra nasal integrada y ajustable</p>
                  <p>-Adecuado para personas que usan gafas</p>
                  <strong>Material y Peso</strong>
                  <p>
                    -Capa interior ≈ 25 gsm (± 1 gsm): PP spunbond no tejido, blanco.
                  </p>
                  <p>
                    -Medio filtrante ≈ 25 gsm (± 1 gsm): PP no tejido soplado en fusión, blanco.
                  </p>
                  <p>
                    -Capa exterior ≈ 20 gsm (± 1 gsm): PP spunbond no tejido, azul.
                  </p>
                  <strong>Eficiencia de filtración bacteriana (BFE) ≥ 98</strong>
                </MKTypography>
              )}
              {value === 1 && (
                <MKTypography variant="body1">
                  <strong>Ficha Técnica</strong>
                  <p>Descarga el folleto con toda la información detallada:</p>
                  <MKButton
                    variant="contained"
                    color="info"
                    href="/fichaTecnica/FichaTecnica_Cubreboca_3_capas.pdf"
                    download
                  >
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
