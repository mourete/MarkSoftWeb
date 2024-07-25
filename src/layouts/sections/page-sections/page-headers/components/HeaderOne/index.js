import React from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import mascarilla from "assets/images/mascarilla_3_capas.jpg";
import funda from "assets/images/fundaCama1.png";
import guante from "assets/images/guante_1.png";
import kn95 from "assets/images/mascarilla_kn95.png";
import bata from "assets/images/bata.png";
import gorro from "assets/images/gorro.png";

const products = [
  {
    title: "Macarilla 3 Capas",
    image: mascarilla,
    description: "Caja de 50 piezas",
    buttonLabel: "Leer más",
    buttonLink: "/Detalles/Mascarilla",
  },
  {
    title: "Sábana Para Camilla Desechable Con Resorte",
    image: funda,
    description: "1 pieza",
    color: "Color Azul",
    buttonLabel: "Leer más",
    buttonLink: "/Detalles/Sabana",
  },
  {
    title: "Guantes Nitrile",
    image: guante,
    description: "1 pieza",
    color: "Color Azul",
    buttonLabel: "Leer más",
    buttonLink: "/Detalles/Guantes",
  },
  {
    title: "Bata Quirúrgica Desechable Reforzada SMS 38gr.",
    image: bata,
    description: "1 bolsa de 10 piezas",
    color: "Color Azul",
    buttonLabel: "Leer más",
    buttonLink: "/Detalles/Bata",
  },
  {
    title: "Gorro Azul Corrugado Cofias.",
    image: gorro,
    description: "1 Bolsa de 100 Piezas",
    color: "Color Azul",
    buttonLabel: "Leer más",
    buttonLink: "/Detalles/Gorro",
  },
  {
    title: "Cubrebocas KN95.",
    image: kn95,
    description: "50 Piezas",
    color: "Color Blanco",
    buttonLabel: "Leer más",
    buttonLink: "/Detalles/Kn95",
  },
];
/* prettier-ignore */
function HeaderOne() {
  return (
    <>
      <MKBox pt={12} px={1}>
        <Container>
          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card align="left" sx={{ height: "100%" }}>
                  <MKBox display="flex" justifyContent="center" alignItems="center" style={{ height: "290px", width: "100%" }}>
                    <CardMedia
                      component="img"
                      alt={product.title}
                      align="center"
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                      image={product.image}
                    />
                  </MKBox>
                  <CardContent sx={{ height: "180px" }}> 
                    <MKTypography
                      gutterBottom
                      variant="h1"
                      color="black"
                      style={{ fontSize: "18px" }}
                    >
                      {product.title}
                    </MKTypography>
                    <MKTypography
                      variant="body2"
                      color="text.secondary"
                      style={{ fontSize: "0.85rem" }}
                    >
                      {product.description}
                    </MKTypography>
                    <MKTypography
                      variant="body2"
                      color="text.secondary"
                      style={{ fontSize: "0.85rem" }}
                    >
                      {product.color}
                    </MKTypography>
                    <Link to={product.buttonLink}>
                      <MKButton
                        variant="contained"
                        color="info"
                        size="small"
                        sx={{ mt: 2 }}
                      >
                        {product.buttonLabel}
                      </MKButton>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default HeaderOne;
