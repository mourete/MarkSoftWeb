import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "View/Presentation";

// Material Kit 2 React routes
import routes from "routes";
import Mascarilla from "Detalles/Mascarilla";
import Sabana from "Detalles/Sabana";
import Guantes from "Detalles/Guantes";
import Bata from "Detalles/Bata";
import Gorro from "Detalles/Gorro";
import Kn95 from "Detalles/Kn95";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/presentation" />} />
        <Route path="/Detalles/Mascarilla" element={<Mascarilla />} />
        <Route path="/Detalles/Sabana" element={<Sabana />} />
        <Route path="/Detalles/Guantes" element={<Guantes />} />
        <Route path="/Detalles/Bata" element={<Bata />} />
        <Route path="/Detalles/Gorro" element={<Gorro />} />
        <Route path="/Detalles/Kn95" element={<Kn95 />} />
      </Routes>
    </ThemeProvider>
  );
}
