import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { styled } from "@mui/system";

// Custom styles for WhatsApp button
const WhatsAppButtonWrapper = styled("div")({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "#25D366",
  borderRadius: "50%",
  width: "50px", // Aumenta el tamaño del botón
  height: "50px", // Aumenta el tamaño del botón
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  cursor: "pointer",
  zIndex: 1000,
});

const Icon = styled(WhatsAppIcon)({
  color: "white",
  fontSize: "40px", // Aumenta el tamaño del icono
});

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/528182109701", "_blank");
  };

  return (
    <WhatsAppButtonWrapper onClick={handleWhatsAppClick}>
      <Icon />
    </WhatsAppButtonWrapper>
  );
};

export default WhatsAppButton;
