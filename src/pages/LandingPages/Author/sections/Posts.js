//Nosotros
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Icons (use appropriate icons for each card)
import PeopleIcon from "@mui/icons-material/People";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Images
import logo from "assets/images/logo_MarkSoft.png";
/* prettier-ignore */
function Places() {
  return (
    <MKBox component="section" py={2}>
    <Container>
      <Grid container spacing={30}>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center">
            <img src={logo} alt="Quiénes somos" style={{ maxWidth: "100%", height: "auto" }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} display="flex" flexDirection="column" justifyContent="center">
          <MKTypography variant="h4" component="h2" gutterBottom>
            ¿Quiénes somos?
          </MKTypography>
          <MKTypography variant="body1">
            Fundada en 2024 en México como empresa dedicada a la venta de consumibles médicos.
          </MKTypography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" mt={12}>
        <Grid item xs={12} lg={7} textAlign="center">
          <MKTypography variant="h2">MARKSOFT</MKTypography>
          <MKTypography mb={6}>
            Proveedor líder en consumibles y equipo médico en México
          </MKTypography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Box display="flex" justifyContent="center" mb={2}>
                <PeopleIcon fontSize="large" style={{ color: "#003366" }} />
              </Box>
              <Typography variant="h5" component="div">
                Misión
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Proveer consumibles médicos de alta calidad que contribuyan en la salud y el bienestar de las personas, mediante la innovación constante y la excelencia en el servicio, promoviendo prácticas responsables con el medio ambiente y contribuyendo al desarrollo social de nuestras comunidades.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Box display="flex" justifyContent="center" mb={2}>
                <TrendingUpIcon fontSize="large" style={{ color: "#003366" }} />
              </Box>
              <Typography variant="h5" component="div">
                Visión
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Evolucionar continuamente para aportar de manera significativa al mercado nacional de consumibles médicos, fortaleciendo nuestras alianzas estratégicas con clientes y socios comerciales, mientras exploramos oportunidades de expansión internacional con un compromiso firme hacia la responsabilidad ambiental y social.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Box display="flex" justifyContent="center" mb={2}>
                <FavoriteIcon fontSize="large" style={{ color: "#003366" }} />
              </Box>
              <Typography variant="h5" component="div">
                Valores
              </Typography>
              <Typography variant="body2" color="text.secondary">
                En nuestra empresa los valores son el corazón de todo lo que hacemos, no solo nos orientan hacia el éxito empresarial, sino que también nos comprometen a servir mejor a nuestros clientes y aliados, y a contribuir positivamente al bienestar de las personas a las que atendemos.
                <br />- Calidad: Compromiso con productos y servicios de calidad que mejoran la vida de las personas.
                <br />- Integridad: Actuar con honestidad y transparencia en cada aspecto de nuestro trabajo.
                <br />- Responsabilidad: Ser responsables con el medio ambiente, la comunidad y todos aquellos a quienes servimos.
                <br />- Colaboración: Fomentar relaciones colaborativas y de apoyo mutuo con clientes, proveedores y colaboradores.
                <br />- Sostenibilidad: Integrar prácticas sostenibles que protejan el planeta y enriquezcan las comunidades donde vivimos y trabajamos.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </MKBox>
  );
}

export default Places;
