// Contacto
// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultFooter from "examples/Footers/DefaultFooter";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
//@mui icons
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Box from "@mui/material/Box";
// Routes
import footerRoutes from "footer.routes";

// Image
import WhatsAppButton from "components/Whatsapp/Whatsapp";
import Navbar from "components/Navbar/Navbar";

/* prettier-ignore */
function ContactUs() {
  return (
    <>
    <Navbar />
      <MKBox pt={12} px={1} mt={6}>
      <Container>
          <Card variant="outlined" sx={{ p: 3 }}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <MKBox display="flex" justifyContent="center" mb={3}>
                  <MKTypography variant="h4" fontWeight="bold" gutterBottom color="black">
                    Información
                  </MKTypography>
                </MKBox>
                <Grid container spacing={3} mt={8}>
                  <Grid item xs={12} sm={6}>
                    <Card variant="outlined">
                      <CardContent>
                        <Box display="flex" justifyContent="center" mb={2}>
                          <PhoneIcon style={{ color: "#003366", fontSize: '2rem' }} />
                        </Box>
                        <MKTypography variant="h6" component="div" align="center" color="black">
                          LLÁMENOS
                        </MKTypography>
                        <MKTypography variant="body2" color="text.secondary" align="center" style={{ fontSize: '0.875rem' }}>
                          (+52) 81 8210 9701
                        </MKTypography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Card variant="outlined">
                      <CardContent>
                        <Box display="flex" justifyContent="center" mb={2}>
                          <EmailIcon style={{ color: "#003366", fontSize: '2rem' }} />
                        </Box>
                        <MKTypography variant="h6" component="div" align="center" color="black">
                          ESCRÍBANOS
                        </MKTypography>
                        <MKTypography variant="body2" color="text.secondary" align="center" style={{ fontSize: '0.875rem' }}>
                          contacto@marksoft.com.mx
                        </MKTypography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Card variant="outlined">
                      <CardContent>
                        <Box display="flex" justifyContent="center" mb={2}>
                          <LocationOnIcon style={{ color: "#003366", fontSize: '2rem' }} />
                        </Box>
                        <MKTypography variant="h6" component="div" align="center" color="black">
                          DIRECCIÓN
                        </MKTypography>
                        <MKTypography variant="body2" color="text.secondary" align="center" style={{ fontSize: '0.875rem' }}>
                          Monterrey, Nuevo León.
                        </MKTypography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Card variant="outlined">
                      <CardContent>
                        <Box display="flex" justifyContent="center" mb={2}>
                          <AccessTimeIcon style={{ color: "#003366", fontSize: '2rem' }} />
                        </Box>
                        <MKTypography variant="h6" component="div" align="center" color="black">
                          HORARIOS
                        </MKTypography>
                        <MKTypography variant="body2" color="text.secondary" align="center" style={{ fontSize: '0.85rem' }}>
                          Lunes a Viernes 9:00 am a 6:00 pm<br />Sábado de 9:00 am a 2:00 pm
                        </MKTypography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox display="flex" justifyContent="center" mb={3}>
                  <MKTypography variant="h4" fontWeight="bold" gutterBottom color="black">
                    Dejar un mensaje
                  </MKTypography>
                </MKBox>
                <MKTypography variant="body2" mb={4} align="center">
                  Déjenos sus comentarios y con gusto nos pondremos en contacto.
                </MKTypography>
                <form>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <MKInput label="Nombre" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput label="Correo Electrónico" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput label="Teléfono" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput label="Asunto" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput label="Mensaje" fullWidth multiline rows={4} />
                    </Grid>
                    <Grid item xs={12}>
                      <MKButton variant="contained" color="info" fullWidth>
                        Enviar
                      </MKButton>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Card>
        </Container>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
        <WhatsAppButton />
      </MKBox>
    </>
  );
}

export default ContactUs;
