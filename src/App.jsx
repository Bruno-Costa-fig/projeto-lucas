import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { TrilhasContextProvider } from "./context/TrilhasContext";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
 palette: {
  primary: {
   main: "#504908"
  },
  secondary: {
   main: "#D8E3D2"
  }
 }
});

function App() {
 return (
  <TrilhasContextProvider>
   <ThemeProvider theme={theme}>
    <Header />
    <Outlet />
    <Footer />
   </ThemeProvider>
  </TrilhasContextProvider>
 );
}

export default App;