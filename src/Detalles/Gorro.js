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
import gorro from "assets/images/gorro.png";
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
function PageGorro() {
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
        <MKTypography variant="h4" color="white">
            Gorro Azul Corrugado Cofias.
        </MKTypography>
      </MKBox>
      <MKBox pt={4} px={1} mt={6}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Gorro Azul Corrugado Cofias."
                  height="500"
                  image={gorro}
                  title="Gorro Azul Corrugado Cofias."
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
                  </MKBox>
                  <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description" align="center">
                    <Box sx={style}>
                      <img src={gorro} alt="Gorro Azul Corrugado Cofias" style={{ width: "70%" }} />
                    </Box>
                  </Modal>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKTypography variant="h4" component="h1" gutterBottom color="black">
                Gorro Azul Corrugado Cofias.
              </MKTypography>
              <MKTypography variant="h5" component="h1" gutterBottom color="black">
                1 Bolsa de 100 Piezas
              </MKTypography>
              {/* <MKTypography variant="body2" color="textSecondary" paragraph>
                Envío Express: Entrega el mismo día en la Ciudad de México y 1 día hábil para resto de la república.
              </MKTypography> */}
              <MKTypography variant="h5" gutterBottom>
                Descripción
              </MKTypography>
              <p>Elaborado en PP elástico que evita que el cabello y el polvo se caigan, sin látex. Protección personal en laboratorios,
                    hospitales, fábricas, otros.
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
                  <strong>Detalles del producto</strong>
                  <p>-Azul</p>
                  <p>-Tamaño 21&quot;</p>
                  <p>-PP</p>
                  <p>-Doble elástico</p>
                  <strong>Material y Peso</strong>
                  <p>-Polipropileno Spundbond.</p>
                  <p>-Sólido y ligero.</p>
                  <p>-Resistente a la humedad.</p>
                  <p>-≈ 10 gsm (± 1 gsm).</p>
                </MKTypography>
              )}
              {value === 1 && (
                <MKTypography variant="body1">
                <strong>Ficha Técnica</strong>
                <p>Descarga el folleto con toda la información detallada:</p>
                <MKButton variant="contained" color="info" href="/fichaTecnica/FichaTecnica_Gorro_Cofias.pdf" download>
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

export default PageGorro;
